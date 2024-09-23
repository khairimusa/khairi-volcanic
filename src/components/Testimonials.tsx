const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="text-black w-full h-auto flex justify-center items-center py-20"
    >
      <div className="xl:px-2 px-4 w-full max-w-screen-xl h-auto text-black flex flex-col justify-start items-center gap-12">
        <span className="text-3xl font-medium">Testimonials</span>
        <div className="w-full text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="w-full text-center flex justify-center">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 shadow-md">
                <img
                  className="w-full h-full object-contain"
                  alt="avatar"
                  src="https://ui.shadcn.com/avatars/01.png"
                />
              </span>
            </div>
            <div className="flex flex-col justify-center text-orange font-semibold text-xl">
              <span className="w-full text-left">Adrian Chapman,</span>
              <span className="w-full text-left">Head of Sales, Capita EB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
