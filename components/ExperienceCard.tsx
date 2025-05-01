import React from "react";

export default function ExperienceCard({
  year,
  title,
  company,
}: {
  year: string;
  title: string;
  company: string;
}) {
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-md shadow-md">
      <p className="text-green-400 text-sm mb-2">{year}</p>
      <h3 className="text-white font-bold">{title}</h3>
      <p className="text-gray-400 text-sm">{company}</p>
    </div>
  );
}
