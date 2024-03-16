import R1 from "./images/R1.png"
import R2 from "./images/R2.png"
export default function Reviews(){
    return(
        <div className="text-center mx-10 my-10">
            {/* Headings */}
            <div>
                <h1 className="text-xl text-lg text-violet-900 font-bold">Puja Details</h1>
                <h1 className="text-lg text-md text-violet-900 font-bold">Frequently Asked Questions</h1>
            </div>
            {/* Reviews */}
            <div > 
            {/* First */}
                <div class="relative  left-10 max-w-lg rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <p class="text-gray-700 text-base">
                        ""Booking a puja online was a delightful experience from start to finish. The website was easy to navigate, and the booking process was simple and straightforward. The puja ceremony was conducted with great reverence, and I could feel the positive energy flowing throughout. I highly recommend Vedaz for anyone looking to book a puja online." 
                        </p>
                    </div>
                        <div className=" bg-gradient-to-r from-purple-900 to-pink-600 grid grid-cols-3 gap-4 ">
                            <div className="col-span-2 row-span-2">
                                <img class="w-8 h-8 rounded-full mt-4" src={R1} alt="Sunset in the mountains" />
                            </div>
                            <div class="font-bold text-sm text-start mb-2">Isha Sharma</div>
                            <div class="font-bold text-sm text-start mb-2">4.5</div>
                    </div>
                </div>
            {/* Second */}
                
            <div class="absolute right-10 max-w-lg rounded overflow-hidden shadow-lg mr-10">
                    <div class="px-6 py-4">
                        <p class="text-gray-700 text-base">
                        "I had a wonderful experience booking a puja online with Vedaz. The website was user-friendly, and the customer service team was very helpful and responsive to all my queries. The pandits who conducted the puja were knowledgeable and conducted the ceremony with utmost devotion. I felt a deep sense of peace and positivity after the puja. 
                        </p>
                    </div>
                        <div className=" bg-gradient-to-r from-purple-900 to-pink-600 grid grid-cols-3 gap-4 ">
                            <div className="col-span-2 row-span-2">
                                <img class="w-8 h-8 rounded-full mt-4" src={R1} alt="Sunset in the mountains" />
                            </div>
                            <div class="font-bold text-sm text-start mb-2">Divy Agrawal</div>
                            <div class="font-bold text-sm text-start mb-2">4.8</div>
                    </div>
                </div>
            </div>
        </div>
    )
}