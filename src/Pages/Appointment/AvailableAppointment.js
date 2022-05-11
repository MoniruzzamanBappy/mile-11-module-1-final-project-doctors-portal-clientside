import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import AppointService from "./AppointService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
  return (
    <div>
      <h1 className="text-primary mt-3 text-xl font-bold text-center">
        Available Appointments on {format(date, "PP")}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mt-24' >
          {
              services.map(item=><AppointService setTreatment={setTreatment} key={item._id} item={item}/>)
          }
      </div>
      {
        treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
