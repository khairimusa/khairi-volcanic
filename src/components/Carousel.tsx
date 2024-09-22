"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import type { ComponentType, ComponentProps } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./Card";

type PropsComparator<C extends ComponentType> = (
  prevProps: Readonly<ComponentProps<C>>,
  nextProps: Readonly<ComponentProps<C>>
) => boolean;

function genericMemo<C extends ComponentType<any>>(
  Component: C,
  propsComparator?: PropsComparator<C>
) {
  return React.memo(Component, propsComparator) as any as C;
}

interface CarouselCardProps {
  data: {
    imageUrl: string;
    title: string;
    subtitle: string;
    pills: string;
    url: string;
  };
  widthStr?: string;
}

export const CarouselCard = React.memo(
  ({
    data: { imageUrl, title, subtitle, pills, url },
    widthStr = "w-full",
  }: CarouselCardProps) => {
    return (
      <div
        className={widthStr}
        onClick={() => window.open(url, "_blank")}
        role="group"
        aria-roledescription="slide"
      >
        <Card>
          {pills && (
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              {pills}
            </div>
          )}

          <CardContent className="relative flex aspect-square rounded-xl items-center justify-center w-full h-full p-0 inset-0 overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-xl transform transition ease-in-out duration-500 hover:scale-110 hover:rounded-xl"
              src={imageUrl}
              alt="Card content"
            />
          </CardContent>
        </Card>

        {/* Title. */}
        {title && (
          <p className="grow-0 w-full text-lg text-wrap font-normal mt-2 overflow-ellipsis overflow-hidden line-clamp-2 text-grayish-dark leading-lineHeight">
            {title}
          </p>
        )}

        {subtitle && (
          <p className="text-base text-wrap font-normal mt-1 overflow-ellipsis overflow-hidden line-clamp-2 text-grayish-custom leading-lineHeight">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

type RenderDatum<T> = (itemDatum: T) => React.ReactElement;

export interface DynamicCarouselProps<T> {
  itemsData: T[];
  renderDatum: RenderDatum<T>;
}

const DynamicCarousel = genericMemo(
  <T,>({ itemsData, renderDatum }: DynamicCarouselProps<T>) => {
    const [width, setWidth] = useState<number>(0);
    const MD_BREAKPOINT_IN_PX = 768;
    const LG_BREAKPOINT_IN_PX = 1024;

    useEffect(() => {
      function _resetWidth() {
        setWidth(window.innerWidth);
      }
      _resetWidth();
      window.addEventListener("resize", _resetWidth);
      return () => window.removeEventListener("resize", _resetWidth);
    }, []);

    const numElementsVisible = width < LG_BREAKPOINT_IN_PX ? 3 : 5;

    return (
      <>
        {width < MD_BREAKPOINT_IN_PX ? (
          <ContinuousCarousel<T>
            itemsData={itemsData}
            renderDatum={renderDatum}
          />
        ) : (
          <DiscreteCarousel<T>
            itemsData={itemsData}
            numElementsVisible={numElementsVisible}
            renderDatum={renderDatum}
          />
        )}
      </>
    );
  }
);

export const ContinuousCarousel = <T,>({
  itemsData,
  renderDatum,
}: {
  itemsData: T[];
  renderDatum: RenderDatum<T>;
}) => {
  return (
    <div className="w-auto h-fit flex flex-nowrap -mx-4 px-4 gap-x-4 overflow-x-scroll no-scrollbar">
      {itemsData.map((itemDatum, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer shrink-0 grow-0 box-border overflow-auto basis-[40%]"
          >
            {renderDatum(itemDatum)}
          </div>
        );
      })}
    </div>
  );
};

interface DiscreteCarouselProps<T> {
  itemsData: T[];
  numElementsVisible: number;
  renderDatum: RenderDatum<T>;
}

export const DiscreteCarousel = genericMemo(
  <T,>({
    itemsData,
    numElementsVisible,
    renderDatum,
  }: DiscreteCarouselProps<T>) => {
    const maxNumElementsInvisible = itemsData.length - numElementsVisible;
    const maxNumElementsInvisibleSub1 = maxNumElementsInvisible - 1;
    const carouselContainerRef = useRef<HTMLDivElement>(null);
    const singleGapWidth = useRef<number>(0);
    const [itemSideLength, setItemSideLength] = useState<number>(0);
    const numItemsPassed = useRef<number>(0);
    const [shouldShowLeftArrow, setShouldShowLeftArrow] =
      useState<boolean>(false);
    const [shouldShowRightArrow, setShouldShowRightArrow] =
      useState<boolean>(true);

    // Updates numItemsPassed such that the left and right arrows are in sync.
    const updateNumItemsPassed = useCallback(
      (newVal: number) => {
        const oldVal = numItemsPassed.current;
        numItemsPassed.current = newVal;

        if (oldVal === 0 && newVal > 0) {
          setShouldShowLeftArrow(true);
        } else if (oldVal === 1 && newVal === 0) {
          setShouldShowLeftArrow(false);
        } else if (
          oldVal === maxNumElementsInvisibleSub1 &&
          newVal === maxNumElementsInvisible
        ) {
          setShouldShowRightArrow(false);
        } else if (
          oldVal === maxNumElementsInvisible &&
          newVal === maxNumElementsInvisibleSub1
        ) {
          setShouldShowRightArrow(true);
        }
      },
      [maxNumElementsInvisible, maxNumElementsInvisibleSub1]
    );

    useLayoutEffect(() => {
      let newItemSideLength: number;

      function _calculateSingleGapWidth() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const carouselItems = carouselContainerRef.current!.childNodes;

        if (carouselItems.length <= 1) {
          return 0;
        }

        const firstChildNode: HTMLElement = carouselItems[0] as HTMLElement;
        const secondChildNode: HTMLElement = carouselItems[1] as HTMLElement;

        const rightSideOfFirstItem =
          firstChildNode.offsetLeft +
          firstChildNode.getBoundingClientRect().width;
        const leftSideOfSecondItem = secondChildNode.offsetLeft;
        return leftSideOfSecondItem - rightSideOfFirstItem;
      }

      function _recalculateDOMElementLengths() {
        const carouselContainerWidth =
          carouselContainerRef.current!.getBoundingClientRect().width;
        singleGapWidth.current = _calculateSingleGapWidth();

        const totalGapWidth = singleGapWidth.current * (numElementsVisible - 1);
        newItemSideLength =
          (carouselContainerWidth - totalGapWidth) / numElementsVisible;

        setItemSideLength(newItemSideLength);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        carouselContainerRef.current!.scrollLeft =
          numItemsPassed.current * (newItemSideLength + singleGapWidth.current);
      }

      function _handleWheel() {
        updateNumItemsPassed(
          Math.ceil(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            carouselContainerRef.current!.scrollLeft /
              (newItemSideLength + singleGapWidth.current)
          )
        );
      }

      window.addEventListener("resize", _recalculateDOMElementLengths);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      carouselContainerRef.current!.addEventListener("wheel", _handleWheel);
      _recalculateDOMElementLengths();

      const cleanUpCarouselContainerRefObj = carouselContainerRef.current!;
      return () => {
        window.removeEventListener("resize", _recalculateDOMElementLengths);
        cleanUpCarouselContainerRefObj.removeEventListener(
          "wheel",
          _handleWheel
        );
      };
    }, [numElementsVisible, updateNumItemsPassed]);

    // Slides one item to the left if possible.
    function slideLeft() {
      updateNumItemsPassed(Math.max(0, numItemsPassed.current - 1));
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      carouselContainerRef.current!.scrollLeft =
        numItemsPassed.current * (singleGapWidth.current + itemSideLength);
    }

    // Slides one item to the right if possible.
    function slideRight() {
      updateNumItemsPassed(
        Math.min(numItemsPassed.current + 1, maxNumElementsInvisible)
      );
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      carouselContainerRef.current!.scrollLeft =
        numItemsPassed.current * (singleGapWidth.current + itemSideLength);
    }

    return (
      <div>
        <div className="relative">
          <div
            className="w-full flex flex-row gap-x-4 whitespace-nowrap overflow-x-scroll no-scrollbar scroll-smooth"
            ref={carouselContainerRef}
          >
            {itemsData.map((itemDatum, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer shrink-0 grow-0 box-border overflow-auto"
                  style={{ width: `${itemSideLength}px` }}
                >
                  {renderDatum(itemDatum)}
                </div>
              );
            })}
          </div>
          <div
            className="absolute inset-0 w-full p-4 flex flex-row justify-between content-center items-center pointer-events-none"
            style={{ height: `${itemSideLength}px` }}
          >
            <div
              className={`${
                shouldShowLeftArrow ? "" : "invisible"
              } rounded-full w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 cursor-pointer pointer-events-auto flex items-center justify-center`}
              onClick={slideLeft}
            >
              <ChevronLeft size={32} strokeWidth={3} color="#4C4C50" />
            </div>

            {/* Right Arrow */}
            <div
              className={`${
                shouldShowRightArrow ? "" : "invisible"
              } rounded-full w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 cursor-pointer pointer-events-auto flex items-center justify-center`}
              onClick={slideRight}
            >
              <ChevronRight size={32} strokeWidth={3} color="#4C4C50" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default DynamicCarousel;
