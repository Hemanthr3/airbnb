import Image from "next/legacy/image";
import React from "react";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        {img && <Image src={img} layout="fill" 
            className="rounded-xl"
            alt=""
        />}
      </div>
      <h3 className="text-2xl mt-3">
        {title && title}
      </h3>
    </div>
  );
};

export default MediumCard;
