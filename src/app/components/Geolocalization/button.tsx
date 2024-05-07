"use client"

import {type MouseEvent, useContext, useEffect} from 'react';
import useGeolocation from "~/app/hooks/useGeolocation";
import {UserLocationContext} from "~/app/contexts/UserLocationContext";

const options = {}

export default function Button(props: { text: string }) {
  const {loading, error, data, setIsGeolocationEnabled} = useGeolocation(options)
  const [userLocation, setUserLocation] = useContext(UserLocationContext)
  const askForGeolocation = (e: MouseEvent) => {
    e.stopPropagation()
    setIsGeolocationEnabled(true)
  }

  useEffect(() => {
    if (error.message) {
      console.error(error.message)
    }
  }, [error]);

  useEffect(() => {
    if (data.latitude && data.longitude) {
      setUserLocation({latitude: data.latitude, longitude: data.longitude})
    }
  }, [data, setUserLocation]);

  return (
    <main className="">
      <div className="p-10">
        <button className="btn btn-primary" onClick={(e) => {
          askForGeolocation(e)
        }}>{!loading ? props.text : (
          <span className="spinner"></span>
        )}</button>
      </div>
      <div className="p-10">
        {userLocation.latitude && userLocation.longitude && (
          <div>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
          </div>
        )}
      </div>
    </main>
  );
}