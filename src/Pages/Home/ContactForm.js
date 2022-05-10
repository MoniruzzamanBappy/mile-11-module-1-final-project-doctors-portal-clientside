import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <div  style={{
        background: `url(${appointment})`
    }}>
      <div className="mb-12">
        <h1 className="text-primary text-center font-bold ">Contact Us</h1>
        <h1 className="text-white  text-center text-4xl">
          Stay connected with us
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
      <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
      <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
      <button class="btn border-primary text-white bg-gradient-to-r from-secondary mt-6 mb-16 to-primary">Submit</button>
      </div>
      
    </div>
  );
};

export default ContactForm;
