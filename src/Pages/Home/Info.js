import React from 'react';
import InfoCardA from './InfoCardA';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
            <InfoCardA bgClass='bg-gradient-to-r from-secondary to-primary' title="Opening Hours" img={clock}></InfoCardA>
            <InfoCardA bgClass='bg-accent' title="Visit our location" img={location}></InfoCardA>
            <InfoCardA bgClass='bg-gradient-to-r from-secondary to-primary' title="Contact us now" img={phone}></InfoCardA>
        </div>
    );
};

export default Info;