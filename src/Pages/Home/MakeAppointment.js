import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
    style={{
        background: `url(${appointment})`
    }}
    className="bg-accent justify-center items-center flex px-12">
      <div className="flex-1">
        <img className="mt-[-130px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-primary text-xl font-bold">
          Appointment
        </h1>
        <h1 className="text-white text-4xl font-bold py-6">
          Make an appointment Today
        </h1>
        <p className="text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <button class="btn border-primary text-white bg-gradient-to-r from-secondary mt-6 to-primary">Get Started</button>
      </div>
    </section>
  );
};

export default MakeAppointment;
