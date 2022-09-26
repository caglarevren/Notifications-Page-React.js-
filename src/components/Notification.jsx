import React from 'react'

import ChessImg from '../assets/images/image-chess.webp'

function Notification({ person, readNotification, showDescription }) {
  return (
    <main className='notification'>
      <div
        className='notification__main'
        onClick={() => readNotification(person.id)}
      >
        <div className='notification__left'>
          <img
            className='notification__person--img'
            src={person.picture}
            alt='person'
          />
          <div className='notification__info'>
            <div>
              <span className='person-name'>{person.name}</span> &nbsp;
              <span className='person-comment'>{person.comment}</span>
              {!person.read && <span className='circle'></span>}
            </div>
            <div className='notification-date'>{person.date}</div>
          </div>
        </div>
        {person.smallImg && (
          <img className='small-img' src={ChessImg} alt='chess' />
        )}
      </div>

      {showDescription === person.id && (
        <div className='notification__description'>{person.description}</div>
      )}
    </main>
  )
}

export default Notification
