const WorkForUs = () => {
  return (
    <div
      id="work-for-us"
      className="text-black w-full h-auto flex justify-center items-center xl:px-0 px-4"
    >
      <div className="flex sm:justify-center flex-wrap gap-0 max-w-screen-xl bg-orange h-auto">
        <div className="flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_50%] lg:flex-[0_1_50%] xl:flex-[0_1_50%] flex flex-col justify-center items-center px-8 gap-8 text-center py-4">
          <span className="text-3xl text-white font-semibold">Work for us</span>
          <span className="text-base text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
          <span>
            <button className="py-4 px-8 bg-white">learn more</button>
          </span>
        </div>
        <div className="flex-[0_1_100%] sm:flex-[0_1_100%] md:flex-[0_1_50%] lg:flex-[0_1_50%] xl:flex-[0_1_50%]">
          <img
            className="w-full h-full object-cover"
            src="https://adbrand.tv/wp-content/uploads/2019/01/Services-1.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default WorkForUs;
