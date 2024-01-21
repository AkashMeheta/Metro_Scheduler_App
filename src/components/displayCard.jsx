import React from 'react'
import Card from './card';

import "../css/schedules.css";

const DisplayCard = ({ inputs, arr, handelFullList }) => {
  let counter = 1;
  const keyVal = () => {
    counter++;
    return counter;
  }



  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg cardDiv">
          {arr.map((listItems, index) => (
            <Card key={keyVal()} listItems={listItems} inputs={inputs} index={index} handelFullList={handelFullList}></Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayCard;