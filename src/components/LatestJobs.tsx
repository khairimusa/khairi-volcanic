"use client";
import DynamicCarousel from "./Carousel";
import CarouselCard from "./CarouselCard";

const LatestJobs = () => {
  interface Item {
    imageUrl: string;
    title: string;
    subtitle: string;
    pills: string;
    url: string;
  }

  const exampleItems: Item[] = [
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
        "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg",
      title: "The Weeping Woman",
      subtitle: "By Pablo Picasso",
      pills: "Oil",
      url: "https://en.wikipedia.org/wiki/The_Weeping_Woman",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/1200px-Mona_Lisa.jpg",
      title: "Mona Lisa",
      subtitle: "By Leonardo Da Vinci",
      pills: "Oil",
      url: "https://commons.wikimedia.org/wiki/File:Mona_Lisa.jpg",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Frida_Kahlo_%28self_portrait%29.jpg/220px-Frida_Kahlo_%28self_portrait%29.jpg",
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

  return (
    <div className="px-4 md:px-10 py-10  text-black">
      latest job
      <div className="">
        <DynamicCarousel
          itemsData={exampleItems}
          renderDatum={(dataItem: Item) => {
            return <CarouselCard key={dataItem.url} data={dataItem} />;
          }}
        />
      </div>
    </div>
  );
};

export default LatestJobs;
