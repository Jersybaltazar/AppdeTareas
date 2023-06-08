
import {useForm} from "react-hook-form" ;
import {createTask, deleteTask, updateTask, getTask} from "../api/task.api";
import {useNavigate, useParams} from "react-router-dom";
import { useEffect } from "react";
import {toast} from "react-hot-toast";

export  function TaskFormPage() {

    const{
      register,
      handleSubmit,
      formState:{errors},
      setValue,

    }=useForm();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = handleSubmit(async (data)=>{
      if (params.id) {
        await updateTask(params.id, data);
        toast.success("Tarea Actualizada con Exito",{
          position:"bottom-right",
          style:{
            background:"white",
            color:"black"
          }
        })
        
      }else{
        await createTask(data);
        toast.success("Tarea Creada con Exito",{
          position:"bottom-right",
          style:{
            background:"#457B9D",
            color:"#fff"
          }
        })
      }
      navigate("/tareas");
    });

    useEffect(()=>{
      async function loadTask(){
        if (params.id) {
            const{
              data:{titulo,descripcion},
            } = await getTask(params.id);
            setValue("titulo", titulo);
            setValue("descripcion", descripcion)
        }
      }
      loadTask()
    },[])


    return (
      <div className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}>
          <input type="text"
          placeholder="titulo"
          
          {...register("titulo",{required:true})} 
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-yellow-200"/>
          {errors.titulo && <span>Por favor ingrese un titulo</span>}

          <textarea
          rows="3"
          placeholder="Descripción"
          {...register("descripcion",{required:true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-yellow-50">

          </textarea>
          {errors.descripcion && <span>Tambien sugiero que pongas un contenido</span>}

          <button
          className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
          >Guardar tarea</button>
        
        </form>
        {params.id && (
       <div className="flex justify-end">
         <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
        onClick={async()=>{
          const accepted  = window.confirm("Estas seguro de eliminar esta tarea?");
          if(accepted){
            await deleteTask(params.id);
            toast.success("Tarea eliminada con exito",{
              position:"bottom-right",
              style:{
                background:"red",
                color:"#fff"
              }
            })
            navigate("/tareas");
          }
        }}
        >Eliminar</button>
       </div>
       
       )}
      </div>
    );
  }
  