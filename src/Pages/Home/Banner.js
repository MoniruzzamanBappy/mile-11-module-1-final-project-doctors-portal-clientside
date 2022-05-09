import React from "react";
import banner from './../../assets/images/chair.png'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-hero-pattern bg-opacity-0 px-12">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 text-justify">
          The Doctor’s Portal provides health organizations that strive for excellence and quality care, with a tool that allows physicians to measure themselves against key performance indicators set by the organization. This tool helps optimize physician practices in compliance with the organization’s guidelines, offering valuable statistics. Health organizations can easily get creative with this tool by setting targets for practices, and even promoting healthy competition between physicians to increase engagement in providing useful metrics, and overall better quality of service.
          </p>
          <button className="btn text-white bg-gradient-to-r from-secondary to-primary border-1 font-bold btn-primary uppercase">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
