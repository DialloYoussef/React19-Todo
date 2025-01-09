import { useState } from "react";

export default function App() {
 
  const [todos, setTodos] = useState();

  const onSubmit = (formData) => {};
  return (
    <div className="bg-gray-800 min-h-[100vh] w-full">
      <h1 className="p-2 text-3xl font-bold underline text-emerald-200">
        Hello world!
      </h1>
      <div className="m-10">
        <form
          action={
            (formData) => {
              console.log(formData);
            }
          } // Utilisation de l'attribut action avec une fonction
          className="flex items-center justify-center w-full gap-2 my-5"
        >
          <input
            type="text"
            name="todo" // Ajout de l'attribut name
            placeholder="La tâche!!"
            className="flex-1 p-2 rounded-sm ring-stone-700"
          />
          <button type="submit" className="p-2 bg-blue-800 rounded-lg">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}


// 

// LES STATES
// function Button() {
//   const [getState, setState] = useState(0);
//   return (
//     <div className="flex items-center justify-center w-full gap-5">
//       <button className="p-2 text-center bg-red-100" onClick={() => setState(getState + 1)}>
//         Incrementer !
//       </button>
//       <span className="p-2 bg-yellow-200 rounded-lg">{getState}</span>
//       <button className="p-2 text-center bg-red-100" onClick={() => setState(getState - 1)}>
//         Decrementer
//       </button>
//     </div>
//   )
// }


// Props 
// const COLORS = {
//   "red": 'bg-red-500',
//   "blue": 'bg-blue-500',
//   "gray": 'bg-gray-500',
//   "sky": 'bg-sky-500'
// }
// function Lego( {color = "sky"} ) {
//   console.log("color : " + COLORS[color]);
//   const state = useState( 0);
//   console.log("success", state)

//   return (
//     <div className="flex flex-wrap items-center justify-center h-screen">
//       <div className={`w-1/3 h-1/3 ${COLORS[color]}`}></div>
//       <div className="w-1/3 bg-green-500 h-1/3"></div>
//       <div className="w-1/3 h-1/3 bg-yellow-50"></div>
//     </div>
//   )
// }


