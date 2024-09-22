"use client";
import React from "react";

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

const CarouselCard = React.memo(
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
        <div className="relative rounded-xl bg-card text-card-foreground shadow-sm">
          <div className=" pt-0 relative flex aspect-square rounded-xl items-center justify-center w-full h-full p-0 inset-0 overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-xl transform transition ease-in-out duration-500 hover:scale-110 hover:rounded-xl"
              src={imageUrl}
              alt="Card content"
            />
          </div>
        </div>

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

export default CarouselCard;
