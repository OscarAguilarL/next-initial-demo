import React from 'react';

import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </nav>
  );
};
