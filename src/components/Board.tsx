import { Data } from "../types/Data"

export default function Board({
  data
}: {
  data: Data
}) {
  const {
    src,
    title,
    timeframes
  } = data

  return (
    <div className="bg-primary-light-red-work rounded-md">
      <img
        src={'/src/assets/images/' + src}
        className="ml-auto -z-10"
        alt=""
      />

      <div className="bg-neutral-dark-blue -mt-5 p-7 z-10 rounded-md relative">
        <div className="flex justify-between items-center -mt-4 mb-4">
          <h2 className="text-2xl">{title}</h2>
          <img src="/src/assets/images/icon-ellipsis.svg" alt="" />
        </div>

        <h3 className="text-6xl">{timeframes.weekly.current + 'hrs'}</h3>
        <p>Last Week - {timeframes.weekly.previous + 'hrs'}</p>
      </div>
    </div>
  )
}