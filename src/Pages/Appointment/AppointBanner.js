import React from "react";
import banner from "./../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointBanner = ({ date, setDate}) => {
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }
  return (
    <div className="hero banner-hero min-h-screen demo-wrap px-12">
      <img src={banner} className=" demo-bg" alt="" />
      <div className="hero-content demo-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;
