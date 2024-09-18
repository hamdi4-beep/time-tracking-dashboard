import Dashboard from './components/Dashboard'
import data from './data.json'

function App() {
  return (
    <div className="font-rubik bg-neutral-very-dark-blue grid h-screen items-center justify-center text-white">
      <Dashboard data={data} />
    </div>
  )
}

export default App