import { Data } from "../types/Data"

export default function Board({
  backgroundColor,
  data
}: {
  data: Data & {
    currentlyActive: string
  },
  backgroundColor: string
}) {
  const {
    currentlyActive,
    timeframes
  } = data

  const timeframe = timeframes[currentlyActive.toLowerCase()]

  const lasttimes = {
    'Daily': 'Yesterday',
    'Weekly': 'Last Week',
    'Monthly': 'Last Month'
  } as {
    [key: string]: string
  }

  return (
    <div className={`${backgroundColor} rounded-2xl overflow-hidden w-64`}>
      <img
        src={'/src/assets/images/' + data.src}
        className="ml-auto -mt-3 h-[60px]"
        alt=""
      />

      <div className="bg-neutral-dark-blue h-full p-7 -mt-4 rounded-2xl relative">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-1xl font-medium">{data.title}</h2>
          <img
            src="/src/assets/images/icon-ellipsis.svg" alt="" />
        </div>

        <h3 className="text-6xl font-light">{timeframe.current + 'hrs'}</h3>
        <p className="mt-5 text-neutral-pale-blue">{lasttimes[data.currentlyActive]} - {timeframe.previous + 'hrs'}</p>
      </div>
    </div>
  )
}