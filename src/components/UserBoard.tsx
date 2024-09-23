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
    <div className="userboard mb-4 lg:mb-0 bg-neutral-dark-blue flex-shrink-0 rounded-2xl">
      <div className="user-profile bg-neutral-desaturated-blue p-8 rounded-2xl flex gap-5 items-center">
        <div className="w-24 h-24">
          <img
            src="/src/assets/images/image-jeremy.png"
            className="outline text-white rounded-full"
            alt=""
          />
        </div>

        <div className="lg:mt-10 lg:mb-12">
          <span className="font-thin">Report for</span>
          <h1 className="text-3xl md:text-5xl mt-2 font-light">Jeremy Robson</h1>
        </div>
      </div>

      <div className="timeframes-list px-8 p-4 text-neutral-desaturated-blue">
        {['Daily', 'Weekly', 'Monthly'].map((timeframe, i) => {
          return (
            <span
              onClick={handleClick}
              className={`${currentlyActive === timeframe ? 'text-white' : ''} hover:text-white`}
              key={i}
            >{timeframe}</span>
          )
        })}
      </div>
    </div>
  )
}