import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" sticky top-0  bg-[#bab7b2] py-6  z-50">
      <div className="   flex justify-around text-rose-900  font-semibold ">
        <div>
          <h1 className="text-2xl  lg:text-4xl cursor-pointer">Abdul Samad</h1>
        </div>
        <div>
          <ul className="hidden  lg:flex gap-20  text-xl cursor-pointer">
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            
            <Link to={"Projects"}>
            <li>Projects</li>
            </Link>
            
            <Link to={"Customer"}>
            <li>Customers</li>
            </Link>
            
            <Link to={"Contact"}>
            <li>Contact</li>
            </Link>
            
          </ul>
        </div>
        <div>
          <button
            className="py-2 px-3 lg:px-4 text-[#bab7b2] bg-rose-900 hover:bg-rose-950 rounded-lg "
          >
            Keep in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
