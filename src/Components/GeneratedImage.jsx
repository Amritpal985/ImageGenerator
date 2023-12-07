import React from 'react'
import { useLocation } from 'react-router-dom'

const GeneratedImage = (props) => {
    // const dataReceived = props.location.state ? props.location.state.data : '';
 
    const location = useLocation();
  const dataReceived = location.state ? location.state.data : '';

  return (
    <div>
        <h1>Final Image</h1>
        <p> {dataReceived}</p>
    </div>
  )
}

export default GeneratedImage