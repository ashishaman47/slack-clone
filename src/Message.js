import React from 'react';
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className='message'>
      <img src={userImage} alt='' />
      <div className='message__info'>
        <h4>
          {user}{' '}
          <span className='message__timestamp'>
            {/* if date is not present give a random date --> using toDate() else send date and convert it into string  */}
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
