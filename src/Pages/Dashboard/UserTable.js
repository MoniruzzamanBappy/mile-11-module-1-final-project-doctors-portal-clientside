import React from "react";
import { toast } from "react-toastify";

const UserTable = ({ item, index, refetch }) => {
  const { email, role } = item;
  const makeAdmin = () => {
    const url = `http://localhost:5000/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Admin Added ${email}`);
        }
      });
  };
  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <th>{email}</th>
      <th>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-success hover:bg-sky-600 mx-1 btn-xs">
            Make Admin
          </button>
        )}
        <button className="btn btn-warning mx-1 btn-xs">Remove User</button>
      </th>
    </tr>
  );
};

export default UserTable;
