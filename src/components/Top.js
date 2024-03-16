import img1 from "./images/img1.png"
import pray from "./images/pray.png"

export default function Top() {
    return (
        <div>
                    {/* Image */}
            <div className="flex justify-center items-center w-screen">
                <img src={img1} className="w-full h-96 aspect-video " />
            </div>
            {/* Headings */}
            <div className="mx-10"> 
            <div className="flex justify-center items-center w-screen">
                <h1 className="text-2xl text-violet-900 font-bold">22121 Kundiye Shri Ramyagya Evam Shri Ram Katha</h1>
            </div>
            <div className="flex align-center justify-center items-center text-center w-screen" >
                <img src={pray} className="w-8 h-8 aspect-square text-justify" />
                <h1 className="text-xl text-violet-900 font-bold">Ayodhyda Dham special</h1>
                <img src={pray} className="w-8 h-8 aspect-square  text-center" />
            </div>
            <div class="flex items-center">
                <hr class="flex-grow" />
                <span class="">10,000 puja’s conducted</span>
                <hr class="flex-grow" />
            </div>
        </div>
       </div>

    )
}