import {Link} from "react-router-dom";


export function Navigation()  {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tareas">
        <h1 className=" font-bold text-2xl mb-5 text-green-500">Hola estas son tus tareas para el dia de hoy : </h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg text-black">
      <Link to="/tareas-create">Crear Tarea</Link>
      </button>
    </div>
  )
}

