import Dashboard from './components/Dashboard'
import data from './data.json'

function App() {
  return (
    <div className="app-container font-rubik h-screen grid items-center text-white">
      <Dashboard data={data} />
    </div>
  )
}

export default App