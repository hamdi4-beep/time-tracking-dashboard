import Dashboard from './components/Dashboard'
import data from './data.json'

function App() {
  return (
    <div className="font-rubik bg-neutral-very-dark-blue p-4 md:p-2 flex flex-wrap h-screen items-center md:justify-center text-white">
      <Dashboard data={data} />
    </div>
  )
}

export default App