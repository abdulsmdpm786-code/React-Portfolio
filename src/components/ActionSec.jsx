import image from "../assets/Images/card-image-1.jpg";
import image1 from "../assets/Images/card-image-2.jpg";
import image2 from "../assets/Images/card-image-3.jpg";

function ActionSec() {
  return (
    <div className="w-auto h-auto  bg-rose-900 flex flex-col justify-center items-center overflow-hidden">
      <div className="">
        <h1 className="text-[#bab7b2] text-[50px] sm:text-[100px] md:text-[110px] lg:text-[150px] xl:text-[200px] font-bold">
          Let's Explore
        </h1>
        <h1 className="text-[#bab7b2] text-[40px] sm:text-[100px] md:text-[110px] lg:text-[150px] xl:text-[200px] font-semibold sm:-mt-16 ">
          My World
        </h1>
        <p className="text-[#bab7b2]">
          Here i try to showcase my skill and passions <br />
          with images and texts and really excited to <br />
          with my own creation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 mt-5 mb-5 w-full">
          <div className="bg-[#bab7b2] h-72 w-72 rounded-lg overflow-hidden  transition-transform duration-300 hover:scale-105 ">
            <div className="bg-black container mx-auto mt-5 h-40 w-56 overflow-hidden rounded-lg">
                <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="text-center">
              <h1 className="text-rose-900 font-bold mt-3">Web development</h1>

              <button className="bg-rose-900 py-2 px-4 text-[#bab7b2] rounded-lg mt-6">
                Click Me
              </button>
            </div>
          </div>
          <div className="bg-[#bab7b2] h-72 w-72 rounded-lg  transition-transform duration-300 hover:scale-105 ">
            <div className="bg-black container mx-auto mt-5 h-40 w-56 rounded-lg overflow-hidden">
                <img src={image1} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="text-center">
              <h1 className="text-rose-900 font-bold mt-3">Graphic design</h1>

              <button className="bg-rose-900 py-2 px-4 text-[#bab7b2] rounded-lg mt-6">
                Click Me
              </button>
            </div>
          </div>
          <div className="bg-[#bab7b2] h-72 w-72 rounded-lg transition-transform duration-300 hover:scale-105 ">
            <div className="bg-black container mx-auto mt-5 h-40 w-56 rounded-lg overflow-hidden">
                <img src={image2} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="text-center">
              <h1 className="text-rose-900 font-bold mt-3">Photography</h1>

              <button className="bg-rose-900 py-2 px-4 text-[#bab7b2] rounded-lg mt-6">
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionSec;
