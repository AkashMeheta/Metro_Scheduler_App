import React, { useContext } from 'react'
import DisplayCard from './displayCard'
import FullSchedule from './fullSchedule'
import ContextStore from '../store/contextStore'

const DisplaySchedule = () => {
    const store = useContext(ContextStore);
    const inputs = store.inputs;
  return (
    <>
        {(Object.keys(inputs).length == 0) || <DisplayCard />}
    </>
  )
}

export default DisplaySchedule