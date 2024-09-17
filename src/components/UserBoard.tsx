export default function Userboard({
  changeCurrentlyActive
}: {
  changeCurrentlyActive: React.Dispatch<React.SetStateAction<string>>
}) {
  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement
    changeCurrentlyActive((target.textContent as string).toLowerCase())
  }

  return (
    <div className="bg-neutral-dark-blue rounded-md flex-grow">
      <div className="bg-neutral-desaturated-blue p-8 rounded-md">
        <div className="w-24 h-24">
          <img
            src="/src/assets/images/image-jeremy.png"
            className="outline text-white rounded-full"
            alt=""
          />
        </div>

        <div className="mt-8 mb-12">
          <span>Report for</span>
          <h1 className="text-5xl pr-8">Jeremy<br />Robson</h1>
        </div>
      </div>

      <div className="px-8 p-4">
        <p onClick={handleClick}>Daily</p>
        <p onClick={handleClick} className="py-2">Weekly</p>
        <p onClick={handleClick}>Monthly</p>
      </div>
    </div>
  )
}