import logo from "../assets/logo/logo-1.png";
import logo2 from "../assets/logo/logo-2.png";
import logo3 from "../assets/logo/logo-3.png";
import logo4 from "../assets/logo/logo-4.png";
import logo5 from "../assets/logo/logo-5.png";
import logo6 from "../assets/logo/logo-6.png";
import logo7 from "../assets/logo/logo-7.png";
import logo8 from "../assets/logo/logo-8.png";
import logo9 from "../assets/logo/logo-9.png";
import logo10 from "../assets/logo/logo-10.png";
import logo11 from "../assets/logo/logo-11.png";
import logo12 from "../assets/logo/logo-12.png";

function SkillSection() {
  return (
    <div>
      <div>
        <h1
          className="text-[80px] sm:text-[140px] md:text-[170px] lg:text-[200px] xl:text-[250px]
         text-rose-900 font-bold text-center"
        >
          Skills
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="container   pb-10
         grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3  gap-10 place-items-center ">

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              Html
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo2} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              Css
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo3} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              JavaScript
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo4} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              React
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  ">
              <img src={logo5} alt="" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center ">
              Tailwind
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  ">
              <img src={logo6} alt="" className="w-full h-full object-contain " />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center ">
              Bootstrap
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo7} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              Git
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  ">
              <img src={logo8} alt="" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-1">
              GitHub
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo9} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              Photoshop
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo10} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              Premier pro
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo11} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              Canva
            </h1>
          </div>

          <div
            className="h-40 w-40 rounded-lg
       bg-rose-900  transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-28  -mt-8">
              <img src={logo12} alt="" className="" />
            </div>

            <h1 className="text-2xl text-[#bab7b2] font-bold text-center mt-5">
              After effects
            </h1>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default SkillSection;
