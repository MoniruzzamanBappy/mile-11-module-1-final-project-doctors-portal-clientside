import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import TableDoctor from './TableDoctor';

const ManageDoctors = () => {
    const {data: doctors, isLoading, refetch} = useQuery('doctors', ()=>fetch('http://localhost:5000/doctors',{
        headers:{
            
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    } )
    .then(res=>res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-white'>Total Doctors: {doctors?.length}</h1>
            <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((item, index) => (
              <TableDoctor
                key={item._id}
                index={index}
                item={item}
                refetch={refetch}
              ></TableDoctor>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageDoctors;