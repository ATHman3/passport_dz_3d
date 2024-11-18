import Scene from './components/Scene'
import './App.css'



function App() {
  // TODO: add passport text
  // TODO: resposive grid layout

  return (
    <div className="h-screen flex items-center justify-center">
      <div  className="bg-white p-6  w-[1200px] shadow-2xl grid lg:grid-cols-2 gap-4 justify-center">

        <div id='passport' className='w-[500px] h-[500px] bg-white shadow-2xl '>
          <Scene />
        </div>

        <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veritatis, in eaque ut id consequuntur. Maxime incidunt ipsa laudantium sapiente est, praesentium provident nesciunt voluptatem a quasi amet dolore velit!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat possimus nobis cum quis reiciendis accusamus sit ipsum quisquam voluptas, deserunt placeat perspiciatis nulla aspernatur sed aliquam. Itaque debitis amet animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas, dolorem accusamus maiores, corrupti, aliquam recusandae magnam voluptatibus adipisci earum molestias hic repudiandae facilis possimus dolore aperiam. Minima, deleniti! Soluta?
        </p>
      </div>
    </div>
  )
}

export default App