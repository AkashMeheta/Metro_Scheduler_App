import React, { useContext } from 'react'
import FullListCard from './fullListCard';
import ContextStore from '../store/contextStore';

const FullSchedule = ({ setFullId, val }) => {

    const store = useContext(ContextStore);
    const list = store.listArr;
    const DownList = store.DOWNlistArr;
    const index  = store.indexVal;

    const handelCloseButton = () => {
        setFullId(-1);
    }

    let tempObj = list[index];
    let tempDownObj = DownList[index];
    return (
        <>
            {
                val==true ? <div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg cardDiv">
                        {Object.entries(tempObj).map(([station, time]) => (
                            <FullListCard key={station} station={station} time={time} />
                        ))}
                    </div>
                    <button onClick={()=>handelCloseButton()} className='btn btn-success'>CLOSE</button>
                </div>
            </div> : <div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg cardDiv">
                        {Object.entries(tempDownObj).map(([station, time]) => (
                            <FullListCard key={station} station={station} time={time} />
                        ))}
                    </div>
                    <button onClick={()=>handelCloseButton()} className='btn btn-success'>CLOSE</button>
                </div>
            </div>
            }
            
            
        </>
    )
}

export default FullSchedule;