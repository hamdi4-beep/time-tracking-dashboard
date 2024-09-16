import Dashboard from './components/Dashboard'
import data from './data.json'

function App() {
  return (
    <div className="bg-neutral-very-dark-blue flex h-screen items-center justify-center text-white">
      <Dashboard data={data} />
    </div>
  )
}

export default App