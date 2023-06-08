import axios from "axios";

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/task/api/v1/task/'
})

export const getAllTasks =()=> taskApi.get("/");

export const getTask =(id)=> taskApi.get(`/${id}/`);

export const createTask =(tarea)=> taskApi.post("/",tarea);

export const deleteTask =(id)=> taskApi.delete(`/${id}`);

export const updateTask =(id,tarea)=> taskApi.put(`/${id}/`,tarea);