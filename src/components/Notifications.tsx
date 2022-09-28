import React from 'react'

import { useNotificationCard } from '../context/NotificationContext'

import Notification from './Notification'

function Notifications() {
  /* --------------------------------- Context -------------------------------- */
  const { nonReadNotifNumber, readAllNotifications, persons } =
    useNotificationCard()

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
        <Notification key={person.id} {...person} />
      ))}
    </div>
  )
}

export default Notifications
