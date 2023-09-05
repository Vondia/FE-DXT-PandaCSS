import Link from 'next/link';
import React from 'react';
import CarsList from './CarsList';
import { css } from '../../../styled-system/css';
import {  hstack, vstack } from '../../../styled-system/patterns';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={vstack({})}>
      <div className={hstack({ gap: '6', color: "white", fontWeight: "bold" })}>
        <CarsList />
      </div>
      <div className="p-10 flex-1">{children}</div>
    </div>
  );
}
