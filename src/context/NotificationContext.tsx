import { createContext, useContext, useState, ReactNode } from 'react'
import Persons from '../data/data'

/* ---------------------------------- Types --------------------------------- */
type NotificationCardProviderProps = {
  children: ReactNode
}

type PersonTypes = {
  id: number,
  read: boolean,
  name: string,
  picture: string,
  comment: string,
  description: string,
  smallImg: boolean,
  date: string,
}

type NotificationCardContextTypes = {
  persons: PersonTypes[],
  nonReadNotifNumber: number,
  readNotification: (id: number) => void,
  readAllNotifications: () => void,
  showDescription: number | null
}

/* --------------------------------- Context -------------------------------- */
const NotificationCardContext = createContext({} as NotificationCardContextTypes)

export function useNotificationCard() {
  return useContext(NotificationCardContext)
}

export function NotificationCardProvider({ children }: NotificationCardProviderProps) {
  /* ---------------------------------- State --------------------------------- */
  const [persons, setPersons] = useState<PersonTypes[]>(Persons)
  const [showDescription, setShowDescription] = useState<number | null>(null)

  /* -------------------------------- Functions ------------------------------- */
  const nonReadNotifNumber = (function calculateNonReadNotif() {
    let count = 0

    persons.forEach((person) => {
      if (!person.read) count++
    })

    return count
  })()

  function readNotification(id: number) {
    setPersons(
      persons.map((person) => {
        if (person.id === id) {
          person.read = true
        }

        if (showDescription === id) {
          setShowDescription(null)
        } else {
          setShowDescription(id)
        }

        return person
      })
    )
  }

  function readAllNotifications() {
    setPersons(
      persons.map((person) => {
        person.read = true

        return person
      })
    )
  }

  return (
    <NotificationCardContext.Provider
      value={{
        persons,
        nonReadNotifNumber,
        readNotification,
        readAllNotifications,
        showDescription,
      }}
    >
      {children}
    </NotificationCardContext.Provider>
  )
}
