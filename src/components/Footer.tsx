import { Mails, MessageSquareText, Map } from "lucide-react";

const Footer = () => {
  return (
    <div
      id="contact-us"
      className="text-black w-full lg:h-64 h-auto flex justify-center items-center bg-[#3C434A]"
    >
      <div className="w-full max-w-screen-xl h-full text-white flex flex-row justify-center items-center py-12">
        <div className="w-[30%] border-r h-full flex flex-row justify-left items-center px-4 font-semibold text-xl gap-4">
          Get Social
          <div className="flex flex-row justify-center items-center gap-2">
            <svg
              width="50"
              height="50"
              viewBox="0,0,256,256"
              className="cursor-pointer bg-white rounded-full"
            >
              <g className="hover:fill-orange hover:opacity-1 fill-[#847d97]">
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM18,35h-4v-15h4zM16,17c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,35h-4v-5v-2.5c0,-1.925 -1.575,-3.5 -3.5,-3.5c-1.925,0 -3.5,1.575 -3.5,3.5v7.5h-4v-15h4v1.816c1.168,-1.122 2.752,-1.816 4.5,-1.816c3.59,0 6.5,2.91 6.5,6.5z"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0,0,256,256"
              className="cursor-pointer bg-white rounded-full"
            >
              <g className="hover:fill-orange hover:opacity-1 fill-[#847d97]">
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM36.237,20.524c0.01,0.236 0.016,0.476 0.016,0.717c0,7.318 -5.573,15.759 -15.762,15.759c-3.128,0 -6.041,-0.917 -8.491,-2.489c0.433,0.052 0.872,0.077 1.321,0.077c2.596,0 4.985,-0.884 6.879,-2.37c-2.424,-0.044 -4.468,-1.649 -5.175,-3.847c0.339,0.065 0.686,0.1 1.044,0.1c0.505,0 0.995,-0.067 1.458,-0.195c-2.532,-0.511 -4.441,-2.747 -4.441,-5.432c0,-0.024 0,-0.047 0,-0.07c0.747,0.415 1.6,0.665 2.509,0.694c-1.488,-0.995 -2.464,-2.689 -2.464,-4.611c0,-1.015 0.272,-1.966 0.749,-2.786c2.733,3.351 6.815,5.556 11.418,5.788c-0.095,-0.406 -0.145,-0.828 -0.145,-1.262c0,-3.059 2.48,-5.539 5.54,-5.539c1.593,0 3.032,0.672 4.042,1.749c1.261,-0.248 2.448,-0.709 3.518,-1.343c-0.413,1.292 -1.292,2.378 -2.437,3.064c1.122,-0.136 2.188,-0.432 3.183,-0.873c-0.742,1.111 -1.681,2.088 -2.762,2.869z"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0,0,256,256"
              className="bg-white rounded-full cursor-pointer"
            >
              <g className="hover:fill-orange hover:opacity-1 fill-[#847d97]">
                <g transform="scale(5.12,5.12)">
                  <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="w-[70%] h-full flex flex-row justify-evenly items-center px-4 flex-wrap">
          <div className="flex flex-col justify-start items-center h-full w-1/3 gap-1">
            <Mails width={55} height={55} />
            <span className="text-xl font-medium">EMAIL US</span>
            <span className="text-base font-medium">info@volcanic.com</span>
          </div>
          <div className="flex flex-col justify-start items-center h-full w-1/3 gap-1">
            <MessageSquareText width={55} height={55} />
            <span className="text-xl font-medium">GET IN TOUCH</span>
            <span className="text-base font-medium">UK: 0161 217 1417</span>
          </div>
          <div className="flex flex-col justify-start items-center h-full w-1/3 gap-1">
            <Map width={55} height={55} />
            <span className="text-xl font-medium">FIND US</span>
            <span className="text-base text-center font-medium">
              Dale House Floor 8, Tiviot Dale Stockport, SKI 1TB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
