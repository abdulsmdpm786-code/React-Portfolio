import image from "../assets/Contact-Image/image-1.jpeg"

function ContactSec() {
  return (
    <div className="container mx-auto w-10/12 p-5">
      <div className=" w-full  h-auto bg-rose-900 rounded-lg p-10
      flex flex-col xl:flex-row gap-5">
        <div className="hidden md:block w-full xl:w-6/12 h-[600px] bg-[#bab7b2] overflow-hidden rounded-lg">
        <img src={image} className="w-full h-full object-cover" alt="" />

        </div>
        <div className="w-full  xl:w-6/12 h-[600px]  flex flex-col justify-center items-center gap-10">
        <h1 className="text-[#bab7b2] text-4xl font-extrabold">Keep In Touch</h1>
        <form action="" className="flex flex-col  gap-1">
            <input type="text" placeholder="Your Name..."  className=" w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "/><br />
            <input type="text" placeholder="Your Email..." className="w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "/><br />
            <input type="text" placeholder="Your Number..." className="w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "/><br />
            <input type="text" placeholder="Your Place..." className="w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "/><br />
            <button className="py-2 px-4 bg-[#bab7b2] hover:bg-[#a09d97] text-rose-900 font-bold text-lg rounded-lg">Send</button>
        </form>

        </div>
      </div>
    </div>
  );
}

export default ContactSec;
