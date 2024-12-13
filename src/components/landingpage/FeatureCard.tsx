import React from 'react'

const FeatureCard = ({ icon, title, description }:any) => {
    return (
      <div className="flex flex-col items-center bg-white text-center gap-4 p-6 border rounded-md shadow-md">
        <div className="text-4xl text-[#134783]">{icon}</div>
        <h3 className="text-lg text-[#08203A] font-semibold">{title}</h3>
        <p className="text-sm text-[#08203A]">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  