import React from "react";

const AppointService = ({ item ,setTreatment }) => {
    const{ name, slots, price} = item;
  return (
    <div className="card w-96  bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{slots.length} {slots.length >1 ?'spaces': 'space'} available</p>
        <p>{slots.length ? slots.slice(0,1): 'Not available'}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="card-actions mb-10 justify-center">
      
      <label htmlFor="booking-modal" onClick={()=>setTreatment(item)}
      disabled={slots.length===0} className="btn bg-gradient-to-r from-secondary to-primary border-primary text-white font-bold">Book Appointment</label>
    </div>
    </div>
  );
};

export default AppointService;
