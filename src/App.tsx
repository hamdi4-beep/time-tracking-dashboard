import Dashboard from './components/Dashboard'
import data from './data.json'

function App() {
  return (
    <div className="app-container font-rubik bg-neutral-very-dark-blue p-4 h-screen grid items-center text-white">
      <Dashboard data={data} />
    </div>
  )
}

export default App