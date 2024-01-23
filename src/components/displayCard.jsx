import React, { useContext, useState } from 'react'
import Card from './card';

import "../css/schedules.css";
import ContextStore from '../store/contextStore';

const DisplayCard = () => {

  const store = useContext(ContextStore);
  const arr = store.listArr;
  const inputs = store.inputs;
  const DOWNlistArr = store.DOWNlistArr;
  const stations = store.stations;
  const handelFullList = store.handelFullList;

  const start= inputs.start;
  const finish = inputs.finish;



  console.log(`From discard ${stations[start]}`)
  console.log(`From discard ${stations[finish]}`)
  let counter = 1;
  const keyVal = () => {
    counter++;
    return counter;
  }

  return (
    <>
      <div className="container my-5">
          { stations[start]>stations[finish] ? arr.map((listItems, index) => (
            <Card key={keyVal()} listItems={listItems} inputs={inputs} index={index} handelFullList={handelFullList} val={true}></Card>
          )) : DOWNlistArr.map((listItems, index) => (
            <Card key={keyVal()} cardID={keyVal()} listItems={listItems} inputs={inputs} index={index} handelFullList={handelFullList} val={false}></Card>
          ))}
      </div>
    </>
  )
}

export default DisplayCard;