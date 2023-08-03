import Image from "next/image";
import React from "react";

const Cards = ({ image, title, active }: any) => {
  return (
    <div className="relative">
      <Image
        alt="card-image"
        src={image}
        width={700}
        height={500}
        className={`rounded-xl h-[400px]  expanding-card ${
          active ? "w-[900px]" : "w-[100px] cursor-pointer"
        }`}
      />
      <p
        className={`text-white absolute left-10 bottom-5 text-xl  expanding-card-title  ${
          active ? "opacity-1" : "opacity-0"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default Cards;
