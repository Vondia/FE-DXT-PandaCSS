import { Car } from '@/utils/Cars';
import React from 'react'
import { css } from '../../../styled-system/css';

interface CarDetailsProps {
    car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <div className={css({color: "white"})}>
        <h2>{car.carName}</h2>
        <p>`Є{car.carPrice},-/day`</p>
        <p>{car.fuel}</p>
        <p>{car.seats}</p>
        <p>{car.gearType}</p>
        <img src={car.imageUrl} alt={car.carName} />
    </div>
  )
}
