import { useState } from "react";

function App() {

  return (
    <div className="bg-gray-800 min-h-[100vh] w-full">
      <h1 className="text-3xl font-bold underline p-2 text-emerald-200">
        Hello world!
      </h1>
      <button className="bg-red-100 min-h-10 rounded-lg" onClick={() => 
        console.log("Hello world!")
      }>
        Click me!
      </button>
      <Button />
      <Lego color="red" />
      <Lego />      
    </div>
  )
}

const COLORS = {
  "red": 'bg-red-500',
  "blue": 'bg-blue-500',
  "gray": 'bg-gray-500',
  "sky": 'bg-sky-500'
}

// const [getState, setState] = useState(0);
function Button() {
  const [getState, setState] = useState(0);
  return (
    <div className="w-full flex items-center justify-center gap-5">
      <button className="text-center p-2 bg-red-100" onClick={() => setState(getState + 1)}>
        Incrementer !
      </button>
      <span className="rounded-lg p-2 bg-yellow-200">{getState}</span>
      <button className="text-center p-2 bg-red-100" onClick={() => setState(getState - 1)}>
        Decrementer
      </button>
    </div>
  )
}

function Lego( {color = "sky"} ) {
  console.log("color : " + COLORS[color]);
  const state = useState( 0);
  console.log("success", state)

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      <div className={`w-1/3 h-1/3 ${COLORS[color]}`}></div>
      <div className="w-1/3 h-1/3 bg-green-500"></div>
      <div className="w-1/3 h-1/3 bg-yellow-50"></div>
    </div>
  )
}

export default App
