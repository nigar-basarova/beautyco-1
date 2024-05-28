import React from 'react';

const CardTwo = ({ kartinBashligi, kartinParaqrafi, kartinButtonu, kartinShekli }) => {
  return (
    <div className='card-two border-0  container  '>
      <div className="card-body ">
        <h3 className='best-selling m-5'>{kartinBashligi}</h3>
        <p className='text-secondary best-selling'>{kartinParaqrafi}</p>
        <button className='button'> {kartinButtonu} </button>
       
      </div>
      <img src={kartinShekli} alt="" />
    </div>
  );
};

export default CardTwo;
