import { useEffect, useState } from "react";

const getDefaultLocalStorageValue = (key) =>{
  const storedValue = localStorage.getItem(key);

  if(!storedValue) {
    return null;
  }
  try {
    return JSON.parse(storedValue);
  } catch {
    return null;
  }
}


// CUSTOM HOOKS
const useStickyState = (localStorageKey, defaultValue) => {
  const [state, setState] = useState(getDefaultLocalStorageValue(localStorageKey) ?? defaultValue);


  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);
  return [state, setState]
}

export default function App() {
 
  const [todos, setTodos] = useStickyState("Ma Todo List",[
    {id:1, libelle:'todos', checked:false},
    {id:2, libelle:'setTodos', checked:true}
  ]);

  const onAction = async (formData) => {
    const todo = formData.get('todo');
    
    setTodos([...todos, {
      id: Date.now(),
      libelle: todo,
      checked: false,
    }]);
  };

  const deleteTodo = (id)=> {
    if (confirm('Are you sure you want to delete '))
    setTodos(todos.filter((t) => t.id!== id));

  }

  // console.log(todos.length)

  const updateTodo = (id, newChecked)=> {
    let modified = null;
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, checked: newChecked };
        }
        console.log(todos)
        modified = todo;
        return todo;
      })
    )
    alert("Status de " + modified.libelle + " Modifié!! ")
  }

  
  return (
    <div className="bg-gray-800 min-h-[100vh] w-full">
      <h1 className="p-2 text-3xl font-bold text-emerald-200">
        <span className="underline">Hello world!</span>
        <span className="font-thin no-underline "> {todos.length} items</span>
      </h1>
      
      <div className="m-10">
        <form
          action={onAction} 
          className="flex items-center justify-center gap-2 my-5"
        >
          <input
            type="text"
            name="todo" 
            placeholder="La tâche!!"
            className="flex-1 p-2 rounded-lg ring-stone-700"
          />
          <button type="submit" className="p-2 bg-blue-800 rounded-lg">
            Ajouter
          </button>
        </form>
      </div>

      <ul className="grid grid-cols-2 gap-2 p-5 list-disc list-inside md:grid-cols-4">
        {  
        todos.length>0?
          todos.map((todo) =>
            <li key={todo.id} className="flex items-center justify-around gap-1 p-2 rounded-md bg-sky-200">
              <input type="checkbox"
               checked={todo.checked}
               onChange={
                ()=> updateTodo(todo.id, !todo.checked,)
              } className="w-4 h-4 form-checkbox" />
              <span className="flex-1">{todo.libelle}</span>
              <button onClick={()=> {
                deleteTodo(todo.id)
              }} className="p-1 text-xs bg-red-800 border-2 rounded-lg text-gray-50">supprimer</button>
            </li>)
             : 
            <li className="text-yellow-600">Pas de todo</li>
        }
      </ul>
    </div>
  );
}


// Controlled Input
{/* <input type="text"
      name="todo" 
      value={todo}
      onChange={(e)=> {
        setTodos(e.target.value);
      }}
      placeholder="La tâche!!"
      className="flex-1 p-2 rounded-sm ring-stone-700"
    /> */}

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