'use client';

import { Car, deleteCar } from '@/utils/Cars';
import React from 'react'
import { css } from '../../../../styled-system/css';
import {useRouter} from "next/navigation";
interface CarDetailsProps {
    car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  const router = useRouter();
  const handleDelete = async () => {
    const response = await fetch(`/api/add`, {
      method: 'DELETE',
      body: JSON.stringify(car.$id)
    })
  }
  return (
    <div className={css({color: "white"})}>
        <h2>{car.carName}</h2>
        <p>`Є{car.carPrice},-/day`</p>
        <p>{car.fuel}</p>
        <p>{car.seats}</p>
        <p>{car.gearType}</p>
        <img src={car.imageUrl} alt={car.carName} />
        <button onClick={handleDelete} className={css({color: "red.700"})}>Delete</button>
    </div>
  )
}
