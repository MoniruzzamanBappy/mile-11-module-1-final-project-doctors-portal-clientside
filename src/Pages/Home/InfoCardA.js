import React from "react";

const InfoCardA = ({img, title, bgClass}) => {
  return (
      <div class={`card text-white lg:card-side ${bgClass} shadow-xl`}>
        <figure className='pl-5'>
          <img
          style={{width: 60, height: 60}}
            src={img}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>The time during which a business or organization is open for customers or visitors The store's opening hours</p>
        </div>
      </div>
  );
};

export default InfoCardA;
