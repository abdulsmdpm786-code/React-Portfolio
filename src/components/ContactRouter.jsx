import { useState } from "react";
import image from "../assets/Contact-Image/image-1.jpeg";
import Axios_Api from "../Api/api";
import { useNavigate } from "react-router-dom";

function ContactSec() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);


  const Navigate  = useNavigate()

  const handleLogin = async () => {
    try {
      console.log("working....");

      // localStorage.removeItem("token")
      // return

      const response = await Axios_Api.post("/login", { email, password });

      if (response.status === 200) {
        console.log(response);

        localStorage.setItem("token", response?.data?.token);
        Navigate("/", {replace: true});
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto w-10/12 p-5">
      <div
        className=" w-full  h-auto bg-rose-900 rounded-lg p-10
      flex flex-col xl:flex-row gap-5"
      >
        <div className="hidden md:block w-full xl:w-6/12 h-[600px] bg-[#bab7b2] overflow-hidden rounded-lg">
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full  xl:w-6/12 h-[600px]  flex flex-col justify-center items-center gap-10">
          <h1 className="text-[#bab7b2] text-4xl font-extrabold">
            Keep In Touch
          </h1>
          <div className="flex flex-col  gap-1">
            {/* <input type="text" placeholder="Your Name..."  className=" w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "/><br /> */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email..."
              className="w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "
            />
            <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Your Password..."
              className="w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "
            />
            <br />
            {/* <input type="text" placeholder="Your Place..." className="w-60 sm:w-96 h-6 p-5  rounded-lg bg-[#bab7b2] outline-none "/><br /> */}
            <button
              onClick={handleLogin}
              className="py-2 px-4 bg-[#bab7b2] hover:bg-[#a09d97] text-rose-900 font-bold text-lg rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSec;
