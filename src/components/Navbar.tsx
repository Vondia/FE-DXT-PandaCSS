import Link from 'next/link';
import React from 'react';
import { css } from '../../styled-system/css';

export default function Navbar() {
  return (
    <header
    className={css({
      h: '50px',
      bgColor: 'transparant',
      p: '10',
      color: 'white',
      fontSize: 'xl',
      lineHeight: 'xl',
      fontWeight: 'bold',
    })}
  >
    <nav className={css({ display: 'flex', justifyContent: 'space-between', maxW: '6xl', ml: 'auto', mr: 'auto' })}>
      <Link href="/" className={linkStyle}>Home</Link>
      <Link href="/cars" className={linkStyle}>Car Catalogue</Link>
      <Link href="/contact" className={linkStyle}>Contact Us</Link>
    </nav>
  </header>

  );
}

const linkStyle = css({_hover: { borderBottom: '2px solid white' }})
