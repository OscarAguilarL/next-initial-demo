import React from 'react';

import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  { children: 'Home', href: '/' },
  { children: 'About', href: '/about' },
  { children: 'Contact', href: '/contact' },
  { children: 'Pricing', href: '/pricing' },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((el) => (
        <ActiveLink {...el} key={el.href} />
      ))}
    </nav>
  );
};
