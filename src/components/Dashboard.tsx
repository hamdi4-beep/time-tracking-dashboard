import * as React from 'react'

import Userboard from "./Userboard"
import Board from "./Board"

import { Data } from "../types/Data"

export default function Dashboard({
    data
}: {
    data: Data[]
}) {
    const [currentlyActive, setCurrentlyActive] = React.useState('weekly')
    return (
        <div className="flex items-start gap-5">
            <Userboard changeCurrentlyActive={setCurrentlyActive} />

            <div className="grid grid-cols-3 gap-4 items-start">
                {data.map((it, i) => {
                    return (
                        <Board
                            data={{
                                currentlyActive,
                                ...it
                            }}
                            key={i}
                        />
                    )
                })}
            </div>
        </div>
    )
}