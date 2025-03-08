
import React, {createContext, useContext, useEffect} from 'react';
import { useUserContext } from './userContext';

const TaskContext = createContext();

const serverUrl = 'http://localhost:8000/api/v1';

export const TasksProvider = ({children}) => {

const userId = useUserContext().user._id;
const [tasks, setTasks] = React.useState([]);  
const [loading, setLoading] = React.useState(false);
const  [task, setTask] = React.useState({});

const [priority, setPriority] = React.useState('All');

//get tasks
const getTasks = async () => {
    setLoading(true);
    try{
        const response = await axios.get(`${serverUrl}/tasks`);
        const data = await response.json();
        setTasks(response.data);
    }catch (error){
        console.log("Error getting tasks", error);
    }
    setLoading(false);
};

//get task
const  getTask = async (taskId) => {
    setLoading(true);
    try{
        const response = await axios.get(`${serverUrl}/tasks/${id}`);
        const data = await response.json();
        setTask(response.data);
    }catch (error){
        console.log("Error getting task", error);
    }
    setLoading(false);
};

const createTask  = async (task) => {
    setLoading(true);
    try{
        const response = await axios.post(`${serverUrl}/task/create`, task);
        // const data = await response.json();
        setTasks([...tasks, response.data]);
        getTasks();
    }catch (error){
        console.log("Error creating task", error);
    }
    setLoading(false);
};

const updateTask = async (task) => {    
    setLoading(true);
    try{
        const response = await axios.patch(`${serverUrl}/task/${task._id}`, task);

        const newTasks = tasks.map((tsk) => {
            return tsk._id === response.data._id ? response.data : tsk;    
        });

        setTasks(newTasks);
        // const data = await response.json();
        // setTasks([...tasks, response.data]);
        // getTasks();
    }catch (error){
        console.log("Error updating task", error);
    }
   
}

    const deleteTask = async (taskId) => {
        setLoading(true);
        try{
             await axios.delete(`${serverUrl}/task/${taskId}`);
            //remove the task from the tasks array
            const newTasks = tasks.filter((tsk)=> tsk._id !== taskId);
            setTasks(newTasks);
        }catch (error){
            console.log("Error deleting task", error);
        }
        setLoading(false);
    }
useEffect(() => {
    getTasks();
    getTask('67cc23b6aa5e84d834d35ec4');

}, [userId]);


    return (
        <TaskContext.Provider value={{tasks, loading, createTask, updateTask, deleteTask
        ,priority, setPriority}}>
            {children}
        </TaskContext.Provider>
        
    );
};

export const useTasks = () => {
    return useContext(TaskContext);
};
