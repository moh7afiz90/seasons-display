import React, { useState, useEffect } from 'react'

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

  return (
    <div>
      <div>latitude: {lat}</div>
      <div>Error: {errorMessage}</div>
    </div>
  )
}

export default App
