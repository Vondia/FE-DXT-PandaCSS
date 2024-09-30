import React from 'react';
import { css } from '../../../styled-system/css';
import { center, hstack, vstack, wrap } from '../../../styled-system/patterns';
import CarsList from './CarsList';

export default function Cars() {
  return (
        <div className={(hstack + wrap({ gap: '6', color: "white", fontWeight: "bold" }))}>
            <CarsList />
        </div>
  );
}
