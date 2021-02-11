import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../state/themeContext';
import styles from './Header.css';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggle = ({ target }) => {
    if(target.checked) setTheme('dark');
    else setTheme('light');
  };

  return (
    <div className={`${styles.Header} ${styles[theme]}`}>
      <h1 className={styles.title}>Last Airbender</h1>
      <div className={styles.headerbuttons}>
        <label htmlFor="toggle">Theme Toggler
        <input id="toggle" type="checkbox" onChange={toggle}/>
        </label>
        <Link className={styles.homelink} to={'/'}>Home</Link>
      </div>
    </div>
  );
};



export default Header;
