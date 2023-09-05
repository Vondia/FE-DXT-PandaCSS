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
                {car.carName}
                </Link>
            </li>
        ))}
    </ul>
    </div>
  )
}
