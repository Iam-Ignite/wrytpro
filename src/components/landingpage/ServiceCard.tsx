import React from "react";

const ServiceCard = ({ Icon, title, description }: any) => {
  return (
    <div className="flex flex-col  items-center mb-10 gap-4 p-6 text-center border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="text-4xl text-[#134783]">{Icon} </div>
      <h3 className="text-lg text-black font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
