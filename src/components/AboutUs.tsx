const AboutUs = () => {
  const aboutUsInfos = [
    {
      id: 1,
      amount: "2,000 +",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
    },
    {
      id: 2,
      amount: "90,000 +",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
    },
    {
      id: 3,
      amount: "35",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
    },
  ];

  return (
    <div
      id="about-us"
      className="text-black w-full h-auto py-10 flex justify-center items-center bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1551539441-309773d8580b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-xl px-14 gap-14">
        <div className="text-center flex flex-col gap-8">
          <span className="text-white text-3xl font-semibold">About Us</span>
          <span className="text-white text-base font-medium text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </span>
        </div>
        <div className="text-white flex md:flex-row flex-col text-center md:text-left gap-2">
          {aboutUsInfos.map((item, index) => (
            <span key={index}>
              <p className="text-4xl font-semibold">{item.amount}</p>
              <p className="text-base font-medium">{item.description}</p>
            </span>
          ))}
        </div>
        <div className="text-center">
          <button className="text-black bg-white py-4 px-8">read more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
