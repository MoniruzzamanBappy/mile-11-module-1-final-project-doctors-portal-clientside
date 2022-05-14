import React, { useState } from "react";
import { format } from 'date-fns';
import AppointService from "./AppointService";
import BookingModal from "./BookingModal";
import { useQuery } from 'react-query'
import Loading from "../Shared/Loading/Loading";

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, "PP")
    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading/>
  }

    // useEffect(()=>{
    //   const url = `http://localhost:5000/available?date=${formatedDate}`
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formatedDate]);
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
        treatment && <BookingModal date={date} refetch={refetch} setTreatment={setTreatment} treatment={treatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
