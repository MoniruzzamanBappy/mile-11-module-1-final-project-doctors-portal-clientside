import React from "react";

const AppointService = ({ item }) => {
    const{ name, slots} = item;
  return (
    <div class="card w-96  bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary">{name}</h2>
        <p>{slots.length} {slots.length >1 ?'spaces': 'space'} available</p>
        <p>{slots.length ? slots.slice(0,1): 'Not available'}</p>
      </div>
      <div class="card-actions mb-10 justify-center">
      <button disabled={slots.length===0} class="btn bg-gradient-to-r from-secondary to-primary border-primary text-white font-bold">Book Appointment</button>
    </div>
    </div>
  );
};

export default AppointService;