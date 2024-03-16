import React from 'react';

import Card1 from "./images/Card1.png"
import Card2 from "./images/Card2.png"
import Card3 from "./images/Card3.png"
import Card4 from "./images/Card4.png"

export default function Packages() {
    return (
        <div className=" my-10">
            {/* Heading */}
            <div className="flex justify-center items-center w-screen">
                <h1 className="text-2xl text-violet-900 font-bold text-center">Packages</h1>
            </div>

            {/* Cards */}

            <div className='grid grid-cols-1 justyfy-evenly gap-6  p-10 w-screen sm: justyfy-center grid-cols-1  md:grid-cols-2 content-evenly lg:grid-cols-2 justyfy-evenly xl:grid-cols-4 justyfy-evenly '>
                {data.map((d)=>(
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={d.img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{d.name}</div>
                    <p class="text-gray-700 text-base">
                    {d.info}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Book Now</button>
                </div>
                </div>
                ))}
            </div>
        </div>
    )

}

const data=[
    {
        img: Card1,
        name: "Couple puja",
        price:"901",
        info:"Get the blessings for your Family"
    },
    {
        img: Card2,
        name: "Single puja",
        price:"1101",
        info:"Get the blessings for your Family"
    },
    {
        img: Card3,
        name: "Small Family puja",
        price:"1301",
        info:"Get the blessings for your Family"
    },
    {
        img: Card4,
        name: "Big Family puja",
        price:"1501",
        info:"Get the blessings for your Family"
    },
]