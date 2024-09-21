"use client";

function Hero() {
  return (
    <div className="flex flex-col justify-end absolute opacity-80 inset-0 min-h-[110vh] bg-cover bg-center bg-[url(https://upload.wikimedia.org/wikipedia/commons/5/59/Vincent_van_Gogh_-_De_oogst_-_Google_Art_Project.jpg)]">
      <div className="lg:pb-80 pb-52">
        <div className="md:text-6xl text-4xl leading-none font-bold text-white max-w-screen-lg px-4 text-center mx-auto text-wrap">
          Accusantium doloremque quae ab illo
        </div>
        <div className="flex sm:justify-center gap-4 flex-wrap p-4">
          <input
            placeholder={"keyword"}
            className="bg-white p-4 h-14 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_30%] lg:flex-[0_1_30%] xl:flex-[0_1_30%]"
          />
          <input
            placeholder={"location"}
            className="bg-white p-4 h-14 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_30%] lg:flex-[0_1_30%] xl:flex-[0_1_30%]"
          />

          <div className="flex h-14 gap-2 flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_176px] lg:flex-[0_1_176px] xl:flex-[0_1_176px]">
            <button className="align-left bg-orange text-white flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_150px] lg:flex-[0_1_150px] xl:flex-[0_1_150px]">
              SEARCH JOBS
            </button>
          </div>
        </div>
      </div>
      <div className="h-48 border flex items-center justify-center">bottom</div>
    </div>
  );
}

export default Hero;
