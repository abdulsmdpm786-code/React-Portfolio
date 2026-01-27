function NavBar() {
    return(
        <div className="flex justify-around text-rose-900 py-8 font-semibold sticky top-0">
            <div>
                <h1 className="text-4xl">Abdul Samad</h1>
            </div>
            <div >
                <ul className="flex gap-20 text-2xl" >
                    <li >Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className="py-2 px-4 text-[#bab7b2] bg-rose-900 rounded-lg 
                ">Keep in touch</button>
            </div>

        </div>
    )
}

export default NavBar