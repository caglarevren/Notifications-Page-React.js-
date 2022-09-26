import { useState } from 'react'

import Persons from '../data/data'
import Notification from './Notification'

function Notifications() {
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

  /* ----------------------------------- DOM ---------------------------------- */
  return (
    <div className='notifications container'>
      {/* header */}
      <header className='notifications__header'>
        <div className='notifications__header--left'>
          <h1>Notification</h1>
          <span className='badge'>{nonReadNotifNumber}</span>
        </div>
        <button className='btn' onClick={() => readAllNotifications()}>
          Mark all as read
        </button>
      </header>

      {/* Main */}
      {persons.map((person) => (
        <Notification
          key={person.id}
          person={person}
          readNotification={readNotification}
          showDescription={showDescription}
        />
      ))}
    </div>
  )
}

export default Notifications
