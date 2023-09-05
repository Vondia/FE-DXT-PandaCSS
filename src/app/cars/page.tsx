import React from 'react';
import { css } from '../../../styled-system/css';
import { center } from '../../../styled-system/patterns';

export default function Cars() {
  return (
    <div className={center({})}>
      <p className={css({color: "white"})}>Please select a car</p>
    </div>
  );
}
