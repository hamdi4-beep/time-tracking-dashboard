import * as React from 'react'

import Userboard from './UserBoard'
import Board from "./Board"

import { Data } from "../types/Data"

const boardColors = [
    'bg-primary-light-red-work',
    'bg-primary-soft-blue-play',
    'bg-primary-light-red-study',
    'bg-primary-lime-green-exercise',
    'bg-primary-voilet-social',
    'bg-primary-soft-orange-self-care'
]

export default function Dashboard({
    data
}: {
    data: Data[]
}) {
    const [currentlyActive, setCurrentlyActive] = React.useState('Weekly')

    return (
        <div className="dashboard">
            <Userboard state={{
                currentlyActive,
                setCurrentlyActive
            }} />

            <div className="boards-container">
                {data.map((it, i) => {
                    return (
                        <Board
                            data={{
                                currentlyActive,
                                ...it
                            }}
                            backgroundColor={boardColors[i]}
                            key={i}
                        />
                    )
                })}
            </div>
        </div>
    )
}