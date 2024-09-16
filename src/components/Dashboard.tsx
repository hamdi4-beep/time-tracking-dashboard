import Userboard from "./Userboard"
import Board from "./Board"

import { Data } from "../types/Data"

export default function Dashboard({
    data
}: {
    data: Data[]
}) {
    return (
        <div className="flex items-start gap-5">
            <Userboard />

            <div className="grid grid-cols-3 gap-4 items-start">
                {data.map((it, i) => {
                    return (
                        <Board
                            data={it}
                            key={i}
                        />
                    )
                })}
            </div>
        </div>
    )
}