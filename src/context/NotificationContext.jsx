import { createContext, useContext, useState } from 'react'
import Persons from '../data/data'

const NotificationCardContext = createContext()

export function useNotificationCard() {
  return useContext(NotificationCardContext)
}

export function NotificationCardProvider({ children }) {
  /* ---------------------------------- State --------------------------------- */
  const [persons, setPersons] = useState(Persons)
  const [showDescription, setShowDescription] = useState(null)

  /* -------------------------------- Functions ------------------------------- */
  const nonReadNotifNumber = (function calculateNonReadNotif() {
    let count = 0

    persons.forEach((person) => {
      if (!person.read) count++
    })

    return count
  })()

  function readNotification(id) {
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
