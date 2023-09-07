import React from 'react';
import { css } from '../../../styled-system/css';
import { center, hstack, vstack } from '../../../styled-system/patterns';
import CarsList from './CarsList';

export default function Cars() {
  return (
    <div className={center({})}>
          <div className={vstack({})}>
      <div className={hstack({ gap: '6', color: "white", fontWeight: "bold" })}>
        <CarsList />
      </div>
    </div>
    </div>
  );
}
