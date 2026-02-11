import React from 'react'
import pro1 from "../assets/Projects/Screenshot 2026-01-08 095425.png";
import pro2 from "../assets/Projects/Screenshot 2026-01-28 011516.png";
import pro3 from "../assets/Projects/Screenshot 2026-01-28 011622.png";

function ProjectSection() {
  return (
    <div className='bg-[#bab7b2] w-screen xl:h-screen h-auto '>

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
                    <div className="py-2 w-full rounded-sm bg-rose-900 absolute bottom-0">
                      <h1 className="text-[#bab7b2] text-lg font-bold ml-5 mt-1">
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
                    <div className="py-2 w-full rounded-sm  bg-rose-900 absolute bottom-0">
                      <h1 className="text-[#bab7b2] text-lg font-bold ml-5 mt-1">
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
                    <div className="py-2 w-full rounded-sm  bg-rose-900 absolute bottom-0">
                      <h1 className="text-[#bab7b2] text-lg font-bold ml-5 mt-1">
                        Login and signUp page
                      </h1>
                    </div>
                  </a>
                </div>
              </div>
    </div>
  )
}

export default ProjectSection