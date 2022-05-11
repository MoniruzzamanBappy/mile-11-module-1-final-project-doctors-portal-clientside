import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const time = e.target.date.value;
    const pName = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    console.log({slot, _id, time, name,pName, email , number});
    setTreatment(null)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 pt-2.5 justify-items-center gap-5"
            action=""
          >
            <input
              type="text"
              readOnly
              name="date"
              placeholder={format(date, "PP")}
              className="input input-bordered bg-accent w-full max-w-md"
            />
            <select
              name="slot"
              className="input input-bordered bg-accent text-white w-full max-w-md"
            >
              {slots.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="number"
              name="number"
              placeholder="Number"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-md"
            />
            <input class="btn btn-accent" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
