import React from 'react'
import FullListCard from './fullListCard';

const FullSchedule = ({ index, list }) => {
    let tempObj = list[index];
    return (
        <>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg cardDiv">
                    {Object.entries(tempObj).map(([station, time]) => (
                        <FullListCard key={station} station={station} time={time} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FullSchedule;