import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='py-5'></div>
            <Info></Info>
            <Services/>
            <MakeAppointment/>
            
        </div>
    );
};

export default Home;