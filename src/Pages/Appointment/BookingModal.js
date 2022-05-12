import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading] = useAuthState(auth);
  if(loading){
    return <Loading/>
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const pName = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    console.log({slot, _id, date, name,pName, email , number});
    setTreatment(null)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
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
              {slots.map((item ,index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ''}
              readOnly
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
              readOnly
              value={user?.email || ''}
              placeholder="Email"
              className="input input-bordered w-full max-w-md"
            />
            <input className="btn btn-accent" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
