type Data = {
    title: string
    src: string
    timeframes: {
      daily: {
        current: number
        previous: number
      }
      weekly: {
        current: number
        previous: number
      }
      monthly: {
        current: number
        previous: number
      }
    }
  }

export default function Board({
    data
  }: {
    data: Data
  }) {
  
    return (
      <div className="bg-primary-light-red-work rounded-md">
        <img
          src={'/src/assets/images/' + data.src}
          className="ml-auto -z-10"
          alt=""
        />
  
        <div className="bg-neutral-dark-blue -mt-5 p-7 z-10 rounded-md relative">
          <div className="flex justify-between items-center -mt-4 mb-4">
            <h2 className="text-2xl">{data.title}</h2>
            <img src="/src/assets/images/icon-ellipsis.svg" alt="" />
          </div>
  
          <h3 className="text-6xl">{data.timeframes.weekly.current + 'hrs'}</h3>
          <p>Last Week - {data.timeframes.weekly.previous + 'hrs'}</p>
        </div>
      </div>
    )
  }