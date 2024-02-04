import Menu from './components/Menu'

const App = () => {
  return (
    <div className="bg-[#ECE5D1] w-[100vw] h-[100vh] mt-[9vh]">
      <div className="w-1/5">
        <Menu />
      </div>
      <div className="flex flex-col p-2 w-4/5"></div>
    </div>
  )
}

export default App
