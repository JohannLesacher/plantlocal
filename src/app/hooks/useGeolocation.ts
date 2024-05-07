import {useEffect, useState} from "react"
import {type GeolocationOptions} from "../../../types/GeolocationOptions";

interface error {
  message: string
}

export default function useGeolocation(options: GeolocationOptions = {}) {
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({message: ''} as error)
  const [data, setData] = useState({} as GeolocationCoordinates)

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false)
      setError({message: ''})
      setData(e.coords)
    }

    const errorHandler = (error: unknown) => {
      let errorMessage = 'Unknown Error'
      if (error instanceof Error) errorMessage = error.message
      setError({message: errorMessage})
      setLoading(false)
    }

    // Bail if no geolocation
    if (!isGeolocationEnabled) return

    setLoading(true)

    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    )
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    )

    return () => navigator.geolocation.clearWatch(id)
  }, [options, isGeolocationEnabled])

  return {loading, error, data, setIsGeolocationEnabled}
}