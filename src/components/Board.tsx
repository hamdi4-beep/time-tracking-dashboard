import { Data } from "../types/Data"

export default function Board({
  data
}: {
  data: Data & {
    currentlyActive: string
  }
}) {
  const {
    src,
    title,
    timeframes
  } = data

  const timeframe = timeframes[data.currentlyActive]

  const phrases = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  } as {
    [key: string]: string
  }

  return (
    <div className="bg-primary-light-red-work rounded-2xl overflow-hidden">
      <img
        src={'/src/assets/images/' + src}
        className="ml-auto -mt-3 h-[60px]"
        alt=""
      />

      <div className="bg-neutral-dark-blue h-full p-7 -mt-4 rounded-2xl relative">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-1xl font-bold">{title}</h2>
          <img
            src="/src/assets/images/icon-ellipsis.svg" alt="" />
        </div>

        <h3 className="text-6xl">{timeframe.current + 'hrs'}</h3>
        <p className="mt-5 text-neutral-desaturated-blue">{phrases[data.currentlyActive]} - {timeframe.previous + 'hrs'}</p>
      </div>
    </div>
  )
}