import './App.css'
import CardScene from './components/CardScene'
import Description from './components/Description'



function App() {

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6  w-[1200px] shadow-2xl grid lg:grid-cols-2 gap-4 justify-center">
        <CardScene />
        <Description />
      </div>
    </div>
  )
}

export default App