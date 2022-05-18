import React from "react";
import { Link } from "react-router-dom";

const TableAppointments = ({ item, index }) => {
  const {_id, name, treatment, date, slot, price, paid } = item;
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{name}</th>
      <td>{treatment}</td>
      <td>{date}</td>
      <td>{slot}</td>
      <td>
        {price && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs btn-success">Pay</button>
          </Link>
        )}
        {price && paid && (
          <button className="btn btn-xs btn-success">Paid</button>
        )}
      </td>
    </tr>
  );
};

export default TableAppointments;
