
function App() {

  return (
    <div className="bg-gray-800 min-h-[100vh] w-full">
      <h1 className="text-3xl font-bold underline p-2 text-emerald-200">
        Hello world!
      </h1>
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

function Lego( {color = "sky"} ) {
  console.log("color : " + COLORS[color]);
  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      <div className={`w-1/3 h-1/3 ${COLORS[color]}`}></div>
      <div className="w-1/3 h-1/3 bg-green-500"></div>
      <div className="w-1/3 h-1/3 bg-yellow-50"></div>
    </div>
  )
}

export default App
