import { getCars } from '@/utils/Cars';
import React from 'react'
import { grid, hstack, vstack } from '../../../styled-system/patterns';
import Link from 'next/link';
import { css } from '../../../styled-system/css'

import { RiSteering2Line, RiGasStationFill } from 'react-icons/ri'
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md'

export default async function CarsList() {

    const cars = await getCars();
    return (

        <ul className={grid({ columns: 4, gap: '6' })}>
            {cars.map((car) => (
                <li role="group" className={css({ background: "white", display: "flex", justifyContent: "space-between", boxShadow: "2xl", rounded: "2xl", p: "4", borderColor: "white", borderWidth: "4px", transition: "all 250ms ease-out", _hover: { borderColor: "yellow.400", borderWidth: "4px", transform: "scale(1.01)" } })} key={car.$id}>
                    <Link href={`/car/${car.$id}`} className={css({ background: "white", position: "relative", display: "flex", overflow: "hidden", flexDirection: "column", justifyContent: "space-between", height: "400px" })}>
                        <div>
                            <h2 className={css({ color: "slate.700", fontSize: "2xl", fontWeight: "bold" })}>{car.carName}</h2>
                            <p className={css({ color: "slate.500" })}>Є <span className={css({ fontSize: "2xl" })}>{car.carPrice}</span> /day</p>
                        </div>
                        <img src={car.imageUrl} alt={car.carName} height="200px" width="300px" />
                        <div className={css({ display: "flex", justifyContent: "space-between", opacity: "1", transition: "all 250ms", height: "57px", position: "relative", left: "0", bottom: "0", width: "100%", _groupHover: { left: "100%", opacity: "0", position: "absolute", overflow: "hidden" } })}>
                            <p className={poep}><RiGasStationFill />{car.fuel}</p>
                            <p className={poep}><MdOutlineAirlineSeatReclineExtra />{car.seats}</p>
                            <p className={poep}><RiSteering2Line />{car.gearType}</p>
                        </div>
                        <div className={css({ opacity: "0", height: "0", position: "absolute", left: "-100%", transition: "left 250ms ease-in-out", overflow: "hidden", _groupHover: { left: "0", width: "100%", position: "relative", height: "57px", opacity: "1" } })}><span className={css({ bg: 'slate.500', color: "white", p: "4", w: "full", display: "inline-block", rounded: "md", textAlign: "center" })}>Rent car</span></div>
                    </Link>
                </li>
            ))}
        </ul>

    )
}

const poep = css({ display: "flex", gap: "2", flexDirection: "column", textAlign: "center", alignItems: "center" })
