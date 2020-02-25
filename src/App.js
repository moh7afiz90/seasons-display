import React, { useState, useEffect } from 'react'
import SeasonDisplay from './SeasonDisplay/SeasonDisplay'

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

  if (lat && !errorMessage) {
    return <SeasonDisplay lat={lat}></SeasonDisplay>
  }
  if (!lat && errorMessage) {
    return <div>Error: {errorMessage}</div>
  }
  return <div>Loading</div>
}

export default App
