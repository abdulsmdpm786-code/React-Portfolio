import image from "../assets/Images/Image-1.png";

function Hero() {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-[80px] sm:text-[140px] md:text-[170px] lg:text-[200px] xl:text-[250px] text-rose-900 font-bold text-center">
          Portfolio
        </h1>
      </div>
      <div className="mt-6 mb-6 flex flex-col justify-center items-center lg:flex-row  lg:justify-around gap-10">
        <div className="w-4/5 lg:h-96 lg:w-2/5">
          <img
            src={image}
            alt=""
            className="rounded-md shadow h-full object-cover w-full"
          />
        </div>
        <div className="w-4/5 lg:h-96 lg:w-2/5">
          <h1 className="text-red-900 text-2xl font-semibold">About Me</h1>
          <p className="mt-10 ">
            I am a passionate Full Stack Developer specializing in the MERN
            stack, with a strong focus on bridging the gap between engineering
            and design. Beyond the code, I am an avid photographer and designer,
            hobbies that sharpen my eye for detail and aesthetics in web
            development. I am also deeply committed to knowledge sharing and
            love teaching technical concepts to help others grow in the tech
            community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
