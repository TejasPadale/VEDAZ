import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function Details() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="text-center mx-10 my-10">
    {/* Headings */}
    <div>
        <h1 className="text-xl text-lg text-violet-900 font-bold">Puja Details</h1>
        <h1 className="text-lg text-md text-violet-900 font-bold">Frequently Asked Questions</h1>
    </div>
    <div className="text-left text-sm">
    {/*First Collapsible  */}
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className="text-md" onClick={() => handleOpen(1)}>Is this really a LIVE puja performed at temple?</AccordionHeader>
            <AccordionBody>
            YES, it is. We have our infrastructure deployed in select temples and we plan to add more in the future. When you buy a ticket, Temple will be sent your details and Pujari will perform in santum santorium with your Gotranama ( Names & Gotra)
            </AccordionBody>
        </Accordion>
        <hr/>
    {/*Second Collapsible  */}
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className="text-md" onClick={() => handleOpen(2)}>Can I perform puja in temple of my choice?</AccordionHeader>
            <AccordionBody>
            Not Possible. We are partnered with Select Temples (popular enough)with which we have agreement and we only provide Puja Services of those temples. All Pujas offered Starts with your Gotranama, Sankalp(Reason) and ends with Aarti as applicable
            </AccordionBody>
        </Accordion>
        <hr/>
    {/*Third Collapsible  */}
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className="text-md" onClick={() => handleOpen(3)}>What if I am not able to watch LIVE puja?</AccordionHeader>
            <AccordionBody>
            For all Puja Services that are offered, we cut and Upload a recorded version of Puja (Sankalp video for Long Pujas like Abhishek/Kalyan or Full Puja like Archana) to our Youtube Channel after 5 hours of Offering. (Any Power and Internet failure may delay sometimes but rarely)
            </AccordionBody>
        </Accordion>
        <hr/>
    {/*Fourth Collapsible  */}
        <Accordion open={open === 4} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className="text-md" onClick={() => handleOpen(4)}>
            Can I offer any Dakshina to priest?
            </AccordionHeader>
            <AccordionBody>
            Yes you can. There is a column in the booking form where you can enter a amount of choice and we will pay the amount to Pujari directly. You can also request for a separate payment link if availing any Puja Package
            </AccordionBody>
        </Accordion>
        <hr/>
    {/*Fifth Collapsible  */}
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader className="text-md" onClick={() => handleOpen(5)}>
            How to contact you if I don’t find answer to my question?
            </AccordionHeader>
            <AccordionBody>
            If you have any specific question which ONLY relates to Puja Services we Offer, you can send a WhatsApp message to our Official Number
            </AccordionBody>
        </Accordion>
        <hr/>
      </div>
    </div>
  );
}
