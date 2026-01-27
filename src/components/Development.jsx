import pro1 from "../assets/Projects/Screenshot 2026-01-08 095425.png";
import pro2 from "../assets/Projects/Screenshot 2026-01-28 011516.png";
import pro3 from "../assets/Projects/Screenshot 2026-01-28 011622.png";

function DevelopmentSec() {
  return (
    <div className="bg-rose-900 w-screen h-auto ">
      <div className="flex gap-4 flex-wrap justify-around py-5">
        <div className="relative transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://abdulsmdpm786-code.github.io/Contact-Web-App/">
            <div className="w-96 h-[400px] bg-black rounded-lg overflow-hidden ">
              <img
                src={pro1}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="h-10 w-96 rounded-sm bg-[#bab7b2] absolute bottom-0">
              <h1 className="text-rose-900 text-lg font-bold ml-5 mt-1">
                Contact web App
              </h1>
            </div>
          </a>
        </div>

        <div className="relative transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://abdulsmdpm786-code.github.io/Weather-Web-App/">
            <div className="w-96 h-[400px] bg-black rounded-lg overflow-hidden">
              <img
                src={pro2}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="h-10 w-96 rounded-sm bg-[#bab7b2] absolute bottom-0">
              <h1 className="text-rose-900 text-lg font-bold ml-5 mt-1">
                Weather App
              </h1>
            </div>
          </a>
        </div>

        <div className="relative transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://abdulsmdpm786-code.github.io/sign-in-page/">
            <div className="w-96 h-[400px] bg-black rounded-lg overflow-hidden">
              <img
                src={pro3}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="h-10 w-96 rounded-sm bg-[#bab7b2] absolute bottom-0">
              <h1 className="text-rose-900 text-lg font-bold ml-5 mt-1">
                Login and signUp page
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentSec;
