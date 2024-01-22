import React, { useState } from 'react'
import FullSchedule from './fullSchedule';

import "../css/schedules.css";

const Card = ({ inputs, listItems, index, handelFullList }) => {
  let start = inputs.start;
  let finish = inputs.finish;

  const stations = {
    SECTORV: 1,
    KARUNAMOYEY: 2,
    CENTRALPARK: 3,
    CITYCENTER: 4,
    BENGALCHEMICAL: 5,
    SALTLAKESTADIUM: 6,
    PHOOLBAGAN: 7,
    SEALDAH: 8
  };

  const fullDetails = (index) => {
    handelFullList(index);
    console.log(`from card ${index}`)
  }

  function subTime(a, b) {
    let sub = 0;

    let temp1 = a.split(":");
    let temp2 = b.split(":");

    let t1 = Number(temp1[1]);
    let t2 = Number(temp2[1]);
    let temp3 = temp1[0] * 60 + t1;
    let temp4 = temp2[0] * 60 + t2;

    sub = Math.abs(temp3 - temp4);
    return sub;
  }

  return (
    <>
      <div className="schedules">
        <p className='indexP'>{index + 1}</p>
        <div className='start-finish'>
          <p className='time'>{listItems[start]}</p>
          <p>{start}</p>
        </div>
        <div className='start-finish'>
          <p className='time'>{listItems[finish]}</p>
          <p>{finish}</p>
        </div>
        <div className='start-finish'>
          <p className='time'> {subTime(listItems[start], listItems[finish])} min</p>
          <p >{stations[start] - stations[finish]} Stops</p>
        </div>
        <div className='start-finish'>
          <button onClick={() => fullDetails(index)} className='btn btn-primary'>Full Details</button>
        </div>
      </div>
    </>
  )
}

export default Card