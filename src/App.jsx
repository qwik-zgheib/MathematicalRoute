import Menu from './components/Menu'
const App = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-slate-700">
      <div className="w-1/5">
        <Menu />
      </div>
      <div className="flex flex-col p-2 w-4/5">
        <p className="text-yellow-700">The Mathematical Route</p>
      </div>
    </div>
  )
}

export default App
