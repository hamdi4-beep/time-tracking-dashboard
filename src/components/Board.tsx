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
    <div className={`${backgroundColor} rounded-2xl mb-4 lg:mb-0 overflow-hidden`}>
      <img
        src={'/src/assets/images/' + data.src}
        className="ml-auto -mt-3 h-[60px]"
        alt=""
      />

      <div className="bg-neutral-dark-blue h-full p-5 md:p-6 -mt-4 rounded-2xl relative">
        <div className="flex justify-between items-center md:mb-7 mb-2">
          <h2 className="text-1xl font-medium">{data.title}</h2>
          <img
            src="/src/assets/images/icon-ellipsis.svg" alt="" />
        </div>

        <div className="flex md:block items-center justify-between">
          <h3 className="text-4xl md:text-5xl font-light">{timeframe.current + 'hrs'}</h3>
          <p className="md:mt-3 text-neutral-pale-blue">{lasttimes[data.currentlyActive]} - {timeframe.previous + 'hrs'}</p>
        </div>
      </div>
    </div>
  )
}