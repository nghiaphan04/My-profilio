import React from "react";
import ContactForm from "../../../components/ContactForm";
import ContactInfoItem from "../../../components/ContactInfoItem";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className=" md:ms-80 md:me-30 min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-[3fr_3fr] gap-12">
        
        
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
