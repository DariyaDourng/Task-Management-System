'use client';
import React, {createContext, useContext, useEffect} from 'react';
import { useUserContext } from './userContext';
import axios from "axios";
import { toast } from 'react-toastify';


const TaskContext = createContext();

const serverUrl = 'http://localhost:8000/api/v1';

export const TasksProvider = ({children}) => {

const userId = useUserContext().user._id;

const [tasks, setTasks] = React.useState([]);  
const [loading, setLoading] = React.useState(false);
const  [task, setTask] = React.useState({
    title: "",           // Initialize with an empty string
    description: "",     // Initialize with an empty string
    priority: "low",     // Default to "low"
    dueDate: "",         // Initialize with an empty string
    completed: false     // Default completed state is false
});

const [priority, setPriority] = React.useState('all');


// get tasks
const getTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/tasks`);

      setTasks(response.data);
   
    } catch (error) {
      console.log("Error getting tasks", error);
    }
    setLoading(false);
  };

  //get task by id
const getTask = async (taskId) => {
    setLoading(true);

    try{
        const response = await axios.get(`${serverUrl}/task/${taskId}`)

        setTask(response.data);
    
    }catch(error){
        console.log("Error getting task", error);
        
    }
    setLoading(false);
};

//create task
const createTask = async (task) => {
    setLoading(true);
    try{
        const response = await axios.post(`${serverUrl}/task/create`, task)
        console.log('Task is created', response.data);

        setTasks([...tasks, response.data]);
        toast.success('Task created successfully');
    }catch(error){
        console.log("Fail to create task", error)
    }setLoading(false);
};

//update task
const updateTask = async (task) => {
    setLoading(true);
    try{
        const response = await axios.patch(`${serverUrl}/task/${task._id}`, task);

        //update the task in the tasks array
        const newTasks = tasks.map((tsk)=> {
            return tsk._id === response._id ? response.data : tsk;
        });

        toast.success('Task successfully updated');
        
        setTasks(newTasks);
    }catch(error){
        console.log('Error in updating task', error)
    }setLoading(false);
};


//detete task
const deleteTask = async (taskId) =>{
    setLoading(true);
    try {
        await axios.delete(`${serverUrl}/task/${taskId}`);

        //remove the task from the tasks array
        const newTasks = tasks.filter((tsk)=> tsk._id !== taskId);
        setTasks(newTasks);
    }catch(error){
        console.log("Error in deleting task");
    }setLoading(false);
}
 
    const handleInput = (name) => (e) => {
        if (name === "setTask") {
          setTask(e);
        } else {
          setTask({ ...task, [name]: e.target.value });
        }
      };
    


useEffect(() => {
    getTasks();


}, [userId]);
    


    return (
        <TaskContext.Provider value={{
            tasks,
            task,
            loading,
            createTask,
            updateTask,
            getTasks,
            getTask,
            deleteTask,
            priority,
            setPriority,
            handleInput,}}>
            {children}
        </TaskContext.Provider>
        
    );
};


export const useTasks = () => {
    return useContext(TaskContext);
};

