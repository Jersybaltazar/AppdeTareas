import {useEffect, useState} from "react";
import {getAllTasks} from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TaskList(){
    const [tareas, setTask] = useState([]);

    useEffect(()=>{
       async function loadTasks(){
            const res = await getAllTasks();
            setTask(res.data)
        }
        loadTasks();
    },[]);
    return (
    <div className="grid grid-cols-3 gap-5">
        {tareas.map((tareas)=>(
            <TaskCard key={tareas.id} tareas={tareas}/>
               
            
        ))}
    </div> 
    );  
}