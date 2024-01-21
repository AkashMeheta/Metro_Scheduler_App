import React, { useState } from 'react'
import FullSchedule from './fullSchedule';

import "../css/schedules.css";

const Card = ({inputs, listItems, index, handelFullList}) => {
    let start = inputs.start;
    let finish = inputs.finish;
    
    const fullDetails = (index) => {
        handelFullList(index);
        console.log(`from card ${index}`)
    }
  return (
    <>
      <div className="schedules">
          <p>{index+1}</p>
          <p>{start}</p>
          <p>{listItems[start]}</p>
          <p>{finish}</p>
          <p>{listItems[finish]}</p>
          <button onClick={()=> fullDetails(index)} className='btn btn-primary'>Full Details</button>
      </div>
    </>
  )
}

export default Card