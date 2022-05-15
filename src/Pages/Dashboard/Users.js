import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserTable from "./UserTable";

const Users = () => {
  const url = `http://localhost:5000/users`;
  const { isLoading, data: users, refetch } = useQuery("users", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl pb-5 text-bold text-secondary">All Users</h2>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <UserTable key={item._id} index={index} refetch={refetch} item={item}></UserTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
