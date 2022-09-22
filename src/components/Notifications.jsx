import React from 'react'

function notifications() {
  return (
    <div className='notifications'>
      <div className='notifications__header container'>
        <div className='notifications__header--left'>
          <h1>Notification</h1>
          <span className='badge'>3</span>
        </div>
        <button className='btn'>Mark all as read</button>
      </div>
    </div>
  )
}

export default notifications
