import React from 'react';
import './Header.css';
import { Avatar, Button } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTimeRounded';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
  //pulling user from datalayer
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        {/* Avatars for logged in user */}
        <Avatar
          className='header__avatar'
          alt={user?.displayName}
          src={user?.photoURL}
        />

        {/* Time icon */}
        <AccessTimeIcon />
      </div>

      <div className='header__search'>
        {/* Search icon */}
        <SearchIcon />

        {/* input  */}
        <input placeholder='Search clever programmer' type='text' />
      </div>
      <div className='header__right'>
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
