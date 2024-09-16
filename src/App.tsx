import UserBoard from './components/UserBoard'
import Board from './components/Board'

import data from './data.json'

function App() {
  return (
    <div className="bg-neutral-very-dark-blue flex h-screen items-center justify-center text-white">
      <div className="flex items-start gap-5">
        <UserBoard />

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
    </div>
  )
}

export default App