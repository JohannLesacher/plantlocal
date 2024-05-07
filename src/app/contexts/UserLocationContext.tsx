"use client"
import React, {createContext, type Dispatch, type SetStateAction, useState} from 'react';

interface UserLocation {
  latitude?: number
  longitude?: number
}

type UserLocationState = [
  UserLocation,
  Dispatch<SetStateAction<UserLocation>>
]

const UserLocationContext = createContext<UserLocationState>([{}, () => {}])

const UserLocationContextWrapper = ({children}: { children: React.ReactNode }) => {
  const UserLocationState = useState<UserLocation>({})

  return (
    <UserLocationContext.Provider value={UserLocationState}>
      {children}
    </UserLocationContext.Provider>
  )
}

export {UserLocationContext, UserLocationContextWrapper}