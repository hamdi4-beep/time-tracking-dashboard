import * as React from 'react'

export default function Userboard({
  state
}: {
  state: {
    currentlyActive: string
    setCurrentlyActive: React.Dispatch<React.SetStateAction<string>>
  }
}) {
  const {
    currentlyActive,
    setCurrentlyActive
  } = state

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement
    setCurrentlyActive(target.textContent!)
  }

  return (
    <div className="bg-neutral-dark-blue rounded-2xl flex-grow">
      <div className="bg-neutral-desaturated-blue p-8 rounded-2xl">
        <div className="w-24 h-24">
          <img
            src="/src/assets/images/image-jeremy.png"
            className="outline text-white rounded-full"
            alt=""
          />
        </div>

        <div className="mt-10 mb-12">
          <span className="font-thin">Report for</span>
          <h1 className="text-5xl pr-8 mt-2 font-light">Jeremy<br />Robson</h1>
        </div>
      </div>

      <div className="timeframes-list px-8 p-4 text-neutral-desaturated-blue">
        {['Daily', 'Weekly', 'Monthly'].map((timeframe, i) => {
          return (
            <span
              onClick={handleClick}
              className={`${currentlyActive === timeframe ? 'text-white' : ''}`}
              key={i}
            >{timeframe}</span>
          )
        })}
      </div>
    </div>
  )
}