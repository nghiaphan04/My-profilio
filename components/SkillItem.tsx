import React from "react";

export default function SkillItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="bg-[#1a1a1a] rounded-md p-6 flex items-center justify-center hover:bg-green-400 transition relative group">
      {icon}
      <span className="absolute bottom-2 right-2 text-xs text-white bg-[#0f0f0f] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        {name}
      </span>
    </div>
  );
}
