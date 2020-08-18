import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from './firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory(); //

  const selectChannel = () => {
    // if you have an id --> we'll use history ---> is used when we want to programatically change the URL
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      // goto collection rooms and add a document in there with the name channelName
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  return (
    //onclick of addChanneloption we want to pop up a little alert ---> enter channel name --> if present open that channel else create that channel
    <div
      className='sidebarOption'
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebarOption__channel'>
          <span className='sidebarOption__hash'>#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
