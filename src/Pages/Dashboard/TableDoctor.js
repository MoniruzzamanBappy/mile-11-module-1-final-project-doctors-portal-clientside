import React from "react";

const TableDoctor = ({ item, index, refetch }) => {
  const { name, specialty, email, img } = item;
  const handleDelete=()=>{
      const url = `http://localhost:5000/doctors/${email}`
      fetch(url, {
          method: 'DELETE',
          headers:{
            
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },

      })
      .then(res =>res.json())
      .then(data=>{
          if(data.deletedCount){

              refetch();
          }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <th>{name}</th>
      <td>{specialty}</td>
      <td>{email}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default TableDoctor;
