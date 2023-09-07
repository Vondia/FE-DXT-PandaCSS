import { getCars } from '@/utils/Cars';
import React from 'react'
import { hstack, vstack } from '../../../styled-system/patterns';
import Link from 'next/link';


export default async function CarsList() {
    const cars = await getCars();
  return (
    <div >
    <ul className={hstack({ gap: '6'})}>
        {cars.map((car) => (
            <li className={vstack({})} key={car.$id}>
                <Link href={`/${car.$id}`}>
                <h2>{car.carName}</h2>
        <p>`Є{car.carPrice},-/day`</p>
        <p>{car.fuel}</p>
        <p>{car.seats}</p>
        <p>{car.gearType}</p>
        <img src={car.imageUrl} alt={car.carName} height="200px" width="300px" />
                </Link>
            </li>
        ))}
    </ul>
    </div>
  )
}
