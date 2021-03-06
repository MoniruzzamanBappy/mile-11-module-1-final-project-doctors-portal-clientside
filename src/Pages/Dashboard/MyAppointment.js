import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import TableAppointments from "./TableAppoinments";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) {
    return <Loading />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const url = `http://localhost:5000/bookings?patient=${user.email}`;
    if (user) {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate("/home");
          } else if (res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate("/login");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [navigate, user]);
  return (
    <div>
      <h2 className="text-3xl pb-5 text-bold text-secondary">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item, index) => (
              <TableAppointments
                key={item._id}
                index={index}
                item={item}
              ></TableAppointments>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
