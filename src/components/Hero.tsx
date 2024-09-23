"use client";
import { Card, CardContent } from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

// function Hero() {
//   return (
//     <div className="flex flex-col justify-end absolute opacity-100 inset-0 min-h-[110vh] bg-cover bg-center bg-[url(https://upload.wikimedia.org/wikipedia/commons/5/59/Vincent_van_Gogh_-_De_oogst_-_Google_Art_Project.jpg)]">
//       <div className="lg:pb-80 xs:pb-56">
//         <div className="md:text-6xl text-4xl leading-none font-bold text-white max-w-screen-lg px-4 text-center mx-auto text-wrap">
//           Accusantium doloremque quae ab illo
//         </div>
//         <div className="flex sm:justify-center gap-4 flex-wrap p-4">
//           <input
//             placeholder={"keyword"}
//             className="bg-white p-4 h-14 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_30%] lg:flex-[0_1_30%] xl:flex-[0_1_30%]"
//           />
//           <input
//             placeholder={"location"}
//             className="bg-white p-4 h-14 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_30%] lg:flex-[0_1_30%] xl:flex-[0_1_30%]"
//           />

//           <div className="flex h-14 gap-2 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_176px] lg:flex-[0_1_176px] xl:flex-[0_1_176px]">
//             <button className="align-left bg-orange text-white flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_150px] lg:flex-[0_1_150px] xl:flex-[0_1_150px]">
//               SEARCH JOBS
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="h-48 flex items-center justify-center bg-black bg-opacity-80">
//         <div id="carousel-container" className="w-full flex p-4">
//           <Carousel
//             opts={{
//               align: "center",
//             }}
//             className="w-full max-w-screen-xl mx-auto"
//           >
//             <CarouselContent>
//               {Array.from({ length: 10 }).map((_, index) => (
//                 <CarouselItem
//                   key={index}
//                   className="select-none basis-1/2 md:basis-1/3 lg:basis-1/5"
//                 >
//                   <div className="flex flex-col justify-center items-center gap-4">
//                     <Card className="rounded-full w-24 h-24 flex items-center justify-center hover:bg-white hover:text-orange cursor-pointer border-2">
//                       <CardContent className="flex items-center justify-center p-6">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={56}
//                           height={56}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-ship-wheel"
//                         >
//                           <circle cx={12} cy={12} r={8} />
//                           <path d="M12 2v7.5" />
//                           <path d="m19 5-5.23 5.23" />
//                           <path d="M22 12h-7.5" />
//                           <path d="m19 19-5.23-5.23" />
//                           <path d="M12 14.5V22" />
//                           <path d="M10.23 13.77 5 19" />
//                           <path d="M9.5 12H2" />
//                           <path d="M10.23 10.23 5 5" />
//                           <circle cx={12} cy={12} r="2.5" />
//                         </svg>
//                       </CardContent>
//                     </Card>
//                     Eiusmod tempor
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="hidden sm:flex">
//               <CarouselPrevious />
//               <CarouselNext />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// }

const Hero = () => {
  return (
    <header
      id="up"
      className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative bg-[url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')]"
    >
      <div
        className="h-screen bg-opacity-50 bg-black flex items-center justify-center w-full"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="w-full h-full flex flex-col justify-end">
          {/* SEARCH BAR */}
          <div className="h-full max-w-screen-2xl w-full mx-auto flex justify-center items-center">
            <div className="w-full">
              <div className="md:text-6xl text-4xl leading-none font-bold text-white max-w-screen-lg px-4 text-center mx-auto text-wrap">
                Accusantium doloremque quae ab illo
              </div>
              <div className="flex sm:justify-center gap-4 flex-wrap p-4">
                <input
                  placeholder={"keyword"}
                  className="bg-white p-4 h-14 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_35%] lg:flex-[0_1_35%] xl:flex-[0_1_35%]"
                />
                <input
                  placeholder={"location"}
                  className="bg-white p-4 h-14 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_35%] lg:flex-[0_1_35%] xl:flex-[0_1_35%]"
                />

                <div className="flex h-14 gap-2 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_15%] lg:flex-[0_1_15%] xl:flex-[0_1_15%]">
                  <button className="align-left bg-orange text-white flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_100%] lg:flex-[0_1_100%] xl:flex-[0_1_100%]">
                    SEARCH JOBS
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="h-48 flex items-center justify-center bg-black bg-opacity-80">
            <div id="carousel-container" className="w-full flex p-4">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="w-full max-w-screen-xl mx-auto"
              >
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="select-none basis-1/2 md:basis-1/3 lg:basis-1/5"
                    >
                      <div className="flex flex-col justify-center items-center gap-4">
                        <Card className="rounded-full w-24 h-24 flex items-center justify-center hover:bg-white hover:text-orange cursor-pointer border-2">
                          <CardContent className="flex items-center justify-center p-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={56}
                              height={56}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-ship-wheel"
                            >
                              <circle cx={12} cy={12} r={8} />
                              <path d="M12 2v7.5" />
                              <path d="m19 5-5.23 5.23" />
                              <path d="M22 12h-7.5" />
                              <path d="m19 19-5.23-5.23" />
                              <path d="M12 14.5V22" />
                              <path d="M10.23 13.77 5 19" />
                              <path d="M9.5 12H2" />
                              <path d="M10.23 10.23 5 5" />
                              <circle cx={12} cy={12} r="2.5" />
                            </svg>
                          </CardContent>
                        </Card>
                        Eiusmod tempor
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:flex">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
