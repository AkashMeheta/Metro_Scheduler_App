import React from 'react'
import "../css/schedules.css";

const FullListCard = ({ station, time }) => {
  return (
    <>
        <p className="schedules">{station} == {time}</p>
    </>
  )
}

export default FullListCard