function NavBar() {
  return (
    <div className=" sticky top-0  bg-[#bab7b2] py-6  z-50">
      <div className="   flex justify-around text-rose-900  font-semibold ">
        <div>
          <h1 className="text-2xl  lg:text-4xl cursor-pointer">Abdul Samad</h1>
        </div>
        <div>
          <ul className="hidden  lg:flex gap-20  text-xl cursor-pointer">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button
            className="py-2 px-3 lg:px-4 text-[#bab7b2] bg-rose-900 rounded-lg "
          >
            Keep in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
