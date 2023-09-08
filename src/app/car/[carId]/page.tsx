import React from 'react'
import CarDetails from './CarDetails'
import { PageProps } from '../../../../.next/types/app/layout'
import { getCarById } from '@/utils/Cars'

// const delay = (delayInms: number) => {
//     return new Promise((resolve) => setTimeout(resolve, delayInms));
//   };

export default async function CarPage({ params }: PageProps) {
    // await delay(2000);
    const id = params.carId;
    const car = await getCarById(id)
  return (
    <div>
        <CarDetails car={car} />
    </div>
  )
}
