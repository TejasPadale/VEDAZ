import lamp from "./images/lamp.png"
import pray from "./images/pray.png"

export default function About() {
    return (
        <div>
            <div className=" w-full">
                <h1 className="text-xl mt-5 text-center text-violet-900 font-bold">About Puja</h1>
            </div>
            <div className=" grid grid-cols-1 justyfy-evenly gap-6  p-10 w-screen sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

                {/* Booking */}

                <div className=" sm:order-2">
                    <div class="bg-violet-200 max-w-lg rounded overflow-hidden shadow-lg">
                        <div>
                            <h1 className="text-lg text-violet-900 font-bold">Book Now</h1>

                            <form className="text-start p-4">
                                <div>
                                    <label className="text-sm"> Date Of Birth:</label>
                                    <div>
                                        <input type="date" className="bg-transparent " />
                                    </div>
                                </div>
                                <div>
                                    <label>Venue:</label>
                                    <div>
                                        <input type="text" placeholder="Enter Your Venue" className="w-full border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-1 bg-transparent " />
                                    </div>
                                </div>
                            </form>

                            <div className="flex justify-center gap-4">
                                <div><img src={pray} className="w-10 h-10 mt-4" ></img></div>
                                <div><img src={pray} className="w-12 h-12 "></img></div>
                                <div><img src={pray} className="w-10 h-10 mt-4"></img></div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* About info */}
                <div className=" col-span-2 sm:order-1 justify-center md:order-1">
                    {about.map((d) => (
                        <div className="flex flex-nowrap space-x-2 space-y-3 " >
                            <div>
                                <img src={lamp} className="w-6 h-6 aspect-1:1 flex-auto " />
                            </div>
                            <div className="text-left">
                                <p>{d.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

var about = [
    { detail: "The festive season of India is earmarked by the worshipping and celebration of Goddess Durga. It generally occurs in the month of September-October." },
    { detail: "The entire nation becomes more colourful and celebrates the fact of good’s win over evil. Goddess Durga is considered to be the physical form of ‘Shakti’ or ‘Universal Energy’." },
    { detail: "Online puja, also known as e-puja or virtual puja, is a modern approach to performing traditional Hindu rituals through digital platforms. It allows individuals to participate in religious ceremonies and seek blessings from the comfort of their homes, regardless of geographical location." },
    { detail: "Online puja services offer convenience and accessibility, especially for those who may not have access to local temples or priests. However, it's important to choose a reputable service provider to ensure the authenticity and sanctity of the rituals" }
]