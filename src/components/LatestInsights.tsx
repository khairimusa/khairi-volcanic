import { Card, CardContent } from "./Card";
import { Carousel, CarouselContent, CarouselItem } from "./Carousel";

const exampleItems: any[] = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    title: "The Starry Night",
    subtitle: "By Van Gogh",
    pills: "Oil",
    url: "https://en.wikipedia.org/wiki/The_Starry_Night",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg",
    title: "The Weeping Woman",
    subtitle: "By Pablo Picasso",
    pills: "Oil",
    url: "https://en.wikipedia.org/wiki/The_Weeping_Woman",
  },
  {
    imageUrl:
      "https://cdn.historycollection.com/wp-content/uploads/2019/05/00094701-1024x805.jpg",
    title: "Mona Lisa",
    subtitle: "By Leonardo Da Vinci",
    pills: "Oil",
    url: "https://commons.wikimedia.org/wiki/File:Mona_Lisa.jpg",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Van_Gogh_-_Vase_of_Roses.jpg",
    title: "Self-Portrait with Thorn Necklace and Hummingbird",
    subtitle: "By Frida Kahlo",
    pills: "Oil",
    url: "https://en.wikipedia.org/wiki/Self-Portrait_with_Thorn_Necklace_and_Hummingbird",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Claude_Monet_-_Springtime_-_Google_Art_Project.jpg/570px-Claude_Monet_-_Springtime_-_Google_Art_Project.jpg",
    title: "Springtime",
    subtitle: "By Claude Monet",
    pills: "Oil",
    url: "https://en.wikipedia.org/wiki/Springtime_%28Claude_Monet%29",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Michelangelo_Buonarroti_-_Archers_shooting_at_a_herm_-_Google_Art_Project.jpg/800px-Michelangelo_Buonarroti_-_Archers_shooting_at_a_herm_-_Google_Art_Project.jpg?20121010203022",
    title: "Archers shooting at a herm",
    subtitle: "By Michelangelo",
    pills: "Red Chalk",
    url: "https://commons.wikimedia.org/wiki/File:Michelangelo_Buonarroti_-_Archers_shooting_at_a_herm_-_Google_Art_Project.jpg",
  },
];

const LatestInsights = () => {
  return (
    <div className="text-black w-full h-96 flex flex-col justify-start items-center">
      <span className="text-3xl font-medium py-4">Latest Insights</span>

      <div className="flex items-center justify-center w-full max-w-screen-xl h-full px-4">
        <div className="w-full h-full flex justify-center items-center">
          <Carousel className=" w-full h-full max-w-screen-xl flex items-center">
            <CarouselContent>
              {exampleItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="select-none basis-full md:basis-1/3 lg:basis-1/4 h-72"
                >
                  <div className="relative w-auto h-full overflow-hidden bg-cover bg-no-repeat cursor-pointer">
                    <img
                      src={item.imageUrl}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute flex flex-col justify-end items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-orange  to-orange-300 opacity-0 transition duration-300 ease-in-out hover:opacity-80">
                      <div className="flex flex-col pb-6 px-4 w-full">
                        <span className="text-xl pb-4 font-semibold text-white">
                          Ut labore et dolore magna
                        </span>
                        <span className="text-base text-white">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default LatestInsights;
