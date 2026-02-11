import React from "react";
import { useLoaderData } from "react-router-dom";
import CustomerSecCard from "./CustomerSecCard";

function CustomerSec() {
  const users = useLoaderData();

  const usersArray = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "John Doe", email: "john@example.com" },
    { id: 4, name: "Jane Smith", email: "jane@example.com" },
    { id: 5, name: "John Doe", email: "john@example.com" },

  ];

  console.log("this is the data", users);

  return (
    <div className="  w-full h-full ">
      <div className=" ">
        <h1 className=" text-2xl md:text-4xl font-semibold text-rose-900 pt-10 text-center">
          What Our Customers Say{" "}
        </h1>

        <div className="flex justify-around gap-5 mt-10">
          <div className=" h-60  ">
            
            <h1 className="mt-2 md:text-3xl font-semibold leading-relaxed text-rose-900">
              Don't Believe Me Check What ClientThink Of Us
            </h1>
          </div>

          {/* <div className=" h-60 w-1/3 flex gap-3 overflow-hidden ">

            {users.data
            .filter((val) => val.id <= 2 )  
              .map((val) => (
                <div className="bg-rose-900 h-auto w-64 rounded-lg text-center px-4 text-white flex flex-col gap-6 p-3
                " key={val.id}>
                  <h1 className="mt-3 font-semibold">{val.id}</h1>
                  <h1 className="font-thin text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestias incidunt excepturi quod,
                  </h1>
                  <h1 className="font-semibold">Abdulsmdpm786@gmail.com</h1>
                </div>
              ))}

          </div> */}
        </div>
        <div className="container mx-auto  grid 2xl:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-4 mt-10 p-5 justify-items-center">
          {usersArray.map((val) => (
            <CustomerSecCard key={val.id} name={val.name} email={val.email} />
          ))}

          

          
        </div>
      </div>
    </div>
  );
}

export default CustomerSec;
