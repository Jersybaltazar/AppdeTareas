import {useNavigate} from "react-router-dom"

export function TaskCard({ tareas }) {
  const navigate  = useNavigate();
  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer border border-solid border-blue-500 rounded-2xl"
    onClick={()=>{
      navigate(`/tareas/${tareas.id}`)
    }}>
      <h1 className="font-bold uppercase text-white ">{tareas.titulo}</h1>
      <p className="text-slate-500"> {tareas.descripcion}</p>
    
    </div>
  );
}
