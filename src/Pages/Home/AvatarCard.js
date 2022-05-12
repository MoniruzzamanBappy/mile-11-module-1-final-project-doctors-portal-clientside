import React from "react";

const AvatarCard = ({items}) => {
  const { name, description, address, img } = items;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center ">
        <p className="text-center">{description}</p>
        <div className="flex justify-around items-center">
          <div className="avatar">
            <div className=" rounded-full ring ring-primary">
              <img src={img} alt="" />

            </div>
          </div>
          <div className="pl-5">
              <h1>{name}</h1>
              <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
