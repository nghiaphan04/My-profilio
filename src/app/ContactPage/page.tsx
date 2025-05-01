import React from "react";
import ContactForm from "../../../components/ContactForm";
import ContactInfoItem from "../../../components/ContactInfoItem";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="mt-28 mb-12 md:ms-80 md:mt-0 md:mb-0 md:me-30 min-h-screen text-white px-6 md:py-32 flex flex-col items-center justify-center">
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
