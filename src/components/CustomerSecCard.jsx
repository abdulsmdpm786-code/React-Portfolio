import React from 'react'

function CustomerSecCard({key, name, email}) {
  return (
    <div>

        <div className="bg-rose-900 h-60 w-64 rounded-lg text-center px-4 text-white flex flex-col gap-6 p-3 hover:scale-105 transition"
        key={key}>
              <h1 className="mt-3 font-semibold">{name}</h1>
              <h1 className="font-thin text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias incidunt excepturi quod,
              </h1>
              <h1 className="font-semibold">{email}</h1>
            </div>
    </div>
  )
}

export default CustomerSecCard