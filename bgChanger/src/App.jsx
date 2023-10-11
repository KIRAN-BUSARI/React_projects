import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')
  // const changeColorHandler = () => {
  //   setColor(prevState => prevState === "red" ? "blue" : "red")
  //   }
  // function handleColor(color) {
  //   setColor(color)
  // }

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600' onClick={()=>changeColorHandler('red')}>RED</button> */}
          {/* <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600' onClick={()=>handleColor('red')}>RED</button> */}
          {/* <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-600' onClick={()=>handleColor('green')}>GREEEN</button> */}
          {/* <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-600' onClick={()=>handleColor('blue')}>BLUE</button> */}
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600' onClick={()=>setColor('red')}>RED</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-600' onClick={()=>setColor('green')}>GREEN</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-600' onClick={()=>setColor('blue')}>BLUE</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-violet-600' onClick={()=>setColor('violet')}>VIOLET</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-600' onClick={()=>setColor('pink')}>PINK</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-black text-white' onClick={()=>setColor('black')}>BLACK</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white text-black' onClick={()=>setColor('white')}>WHITE</button>
        </div>
      </div>
    </div>
  )
}

export default App
