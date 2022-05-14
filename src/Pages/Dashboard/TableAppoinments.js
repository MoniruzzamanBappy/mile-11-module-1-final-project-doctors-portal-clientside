import React from "react";

const TableAppointments = ({item, index}) => {
    const { name, treatment, date, slot} = item;
  return (
      <tr>
        <th>{index +1}</th>
        <th>{name}</th>
        <td>{treatment}</td>
        <td>{date}</td>
        <td>{slot}</td>
      </tr>
  );
};

export default TableAppointments;
