import React from "react";
import AvatarCard from "./AvatarCard";
import p1 from "../../assets/images/people1.png";
import p2 from "../../assets/images/people2.png";
import p3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Testimonials = () => {
  const avatars = [
    {
      _id: 1,
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
      img: p1,
    },
    {
      _id: 2,
      name: "John Wick",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
      img: p2,
    },
    {
      _id: 3,
      name: "Orlando Olsen",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "California",
      img: p3,
    },
  ];
  return (
    <div className="px-12">
      <div className="flex pt-28 justify-between">
        <div>
          <h1 className="text-primary font-bold ">Testimonial</h1>
          <h1 className="text-accent text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16 px-12">
        {
        avatars.map(items => (
          <AvatarCard key={items._id} items={items}></AvatarCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
