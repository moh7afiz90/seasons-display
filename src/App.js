import React, { useState, useEffect } from 'react'
import SeasonDisplay from './SeasonDisplay/SeasonDisplay'
import Spinner from './Spinner'

function App() {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude)
      },
      error => {
        setErrorMessage(error.message)
      }
    )
  }, [])

  const renderContent = () => {
    if (lat && !errorMessage) {
      return <SeasonDisplay lat={lat}></SeasonDisplay>
    }
    if (!lat && errorMessage) {
      return <div>Error: {errorMessage}</div>
    }
    return <Spinner message="Please accept location request...."></Spinner>
  }
  return <div>{renderContent()}</div>
}

export default App
