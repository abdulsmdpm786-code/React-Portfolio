import pro1 from "../assets/Projects/Screenshot 2026-01-08 095425.png";
import pro2 from "../assets/Projects/Screenshot 2026-01-28 011516.png";
import pro3 from "../assets/Projects/Screenshot 2026-01-28 011622.png";

function DevelopmentSec() {
  return (
    <div className="bg-rose-900 w-full min-h-screen  py-5   ">
      <div className="container mx-auto px-5 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-items-center gap-10  py-5">
        <div className=" relative  transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://abdulsmdpm786-code.github.io/Contact-Web-App/">
            <div className="w-full  max-w-sm h-[400px] bg-black rounded-lg overflow-hidden ">
              <img
                src={pro1}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <div className="py-2 w-full rounded-sm bg-[#bab7b2] absolute bottom-0">
              <h1 className="text-rose-900 text-lg font-bold ml-5 mt-1">
                Contact web App
              </h1>
            </div>
          </a>
        </div>

        <div className=" relative transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://abdulsmdpm786-code.github.io/Weather-Web-App/">
            <div className="w-full  max-w-sm  h-[400px] bg-black rounded-lg overflow-hidden">
              <img
                src={pro2}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="py-2 w-full rounded-sm bg-[#bab7b2] absolute bottom-0">
              <h1 className="text-rose-900 text-lg font-bold ml-5 mt-1">
                Weather App
              </h1>
            </div>
          </a>
        </div>

        <div className="relative transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://abdulsmdpm786-code.github.io/sign-in-page/">
            <div className="w-full  max-w-sm  h-[400px] bg-black rounded-lg overflow-hidden">
              <img
                src={pro3}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="py-2 w-full rounded-sm bg-[#bab7b2] absolute bottom-0">
              <h1 className="text-rose-900 text-lg font-bold ml-5 mt-1">
                Login and signUp page
              </h1>
            </div>
          </a>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" flex  flex-col  items-center">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-0 xl:gap-6 mt-10">
            <h1 className="text-[#bab7b2] mt-3 text-[60px] sm:text-[100px]  md:text-[120px] xl:text-[100px] font-semibold">
              Checkout
            </h1>
            <h1 className=" text-[#bab7b2] text-[60px] sm:text-[100px]  md:text-[120px] xl:text-[120px] font-bold">
              My Projects
            </h1>
          </div>
          <div>
            <p className="text-[#bab7b2] text-center ">
              "Check out my GitHub to see my repositories and the projects I
              have built. <br /> You can also view live demos of the sites I have
              highlighted here."
            </p>
          </div>
          <div className="mt-5">
            <button className="bg-[#bab7b2] text-rose-900 py-2 px-4 rounded-lg font-semibold">
              <a href="https://github.com/abdulsmdpm786-code">Check out</a>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default DevelopmentSec;
