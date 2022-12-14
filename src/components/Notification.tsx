import React from 'react'

import { useNotificationCard } from '../context/NotificationContext'

type PersonInfoProps = {
  id: number,
  read: boolean,
  name: string,
  picture: string,
  comment: string,
  description: string,
  smallImg: boolean,
  date: string,
}

function Notification({
  id,
  read,
  name,
  picture,
  comment,
  description,
  smallImg,
  date,
}: PersonInfoProps) {
  /* --------------------------------- Context -------------------------------- */
  const { readNotification, showDescription } = useNotificationCard()

  /* ----------------------------------- DOM ---------------------------------- */
  return (
    <main className='notification'>
      <div className='notification__main' onClick={() => readNotification(id)}>
        <div className='notification__left'>
          <img
            className='notification__person--img'
            src={picture}
            alt='person'
          />
          <div className='notification__info'>
            <div>
              <span className='person-name'>{name}</span> &nbsp;
              <span className='person-comment'>{comment}</span>
              {!read && <span className='circle'></span>}
            </div>
            <div className='notification-date'>{date}</div>
          </div>
        </div>
        {smallImg && <img className='small-img' src={require('../assets/images/image-chess.webp')} alt='chess' />}
      </div>

      {showDescription === id && (
        <div className='notification__description'>{description}</div>
      )}
    </main>
  )
}

export default Notification
