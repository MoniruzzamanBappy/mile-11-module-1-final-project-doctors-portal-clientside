import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';

const ManageDoctors = () => {
    const {data: doctors, isLoading} = useQuery('doctors', ()=>fetch('http://localhost:5000/doctors',{
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
        </div>
    );
};

export default ManageDoctors;