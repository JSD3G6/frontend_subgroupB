/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

function ButtonPurple({ text, onClick }) {
  const [isHover, setIsHover] = useState(false);
  const handleOnClick = () => {
    onClick();
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const purple = 'hsla(266, 99%, 56%, 1)';
  const yellow = 'hsla(36, 96%, 71%, 1)';
  const white = 'hsla(0, 0%, 100%, 1)';
  // const black = `hsla(0, 0%, 8%, 1)`;
  const gradient = `linear-gradient(65deg, ${purple} 35%, ${yellow})`;

  const styles = {
    padding: '0.5rem 1.5rem',
    width: 'auto',
    height: 'auto',
    border: 'none',
    outline: 'none',
    borderRadius: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    scale: isHover ? '0.95' : '1',
    background: isHover ? gradient : purple,
    color: isHover ? white : white,
  };

  return (
    <button
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}

export default ButtonPurple;
