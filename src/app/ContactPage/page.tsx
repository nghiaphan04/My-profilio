import React from "react";
import ContactForm from "../../../components/ContactForm";
import ContactInfoItem from "../../../components/ContactInfoItem";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="pt-28 px-6 bg-black pb-12 md:ps-80  md:pb-0 md:pe-30 min-h-screen text-white  md:pt-18 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <ContactForm />

 
        <div className="flex flex-col justify-center space-y-6">
             <ContactInfoItem icon={<FaPhoneAlt />} text="(+84) 0833075356" title="Phone" delay={0} />
            <ContactInfoItem icon={<FaEnvelope />} text="nghiaphan04dev@gmail.com" title="Email" delay={0.2} />
            <ContactInfoItem icon={<FaMapMarkerAlt />} text="Hai Bà Trưng District, Hanoi Capital, VietNam" title="Address" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
