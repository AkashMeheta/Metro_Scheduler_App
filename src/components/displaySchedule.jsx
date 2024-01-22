import React, { useContext } from 'react'
import DisplayCard from './displayCard'
import FullSchedule from './fullSchedule'
import ContextStore from '../store/contextStore'

const DisplaySchedule = () => {
    const store = useContext(ContextStore);
    const inputs = store.inputs;
    const indexVal = store.indexVal;
  return (
    <>
        {(Object.keys(inputs).length == 0) || <DisplayCard />}
        {indexVal == -1 || <FullSchedule />}
    </>
  )
}

export default DisplaySchedule