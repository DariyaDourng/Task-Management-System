import express from  'express';

// import { creatTask } from '../controllers/task/taskController';
import { protect } from '../middleware/authMiddleware.js';
import { createTask, deleteTask, getTask, getTasks, updateTask } from '../controllers/task/taskController.js';

const router = express.Router();

// router.post('/task/create', (req, res)=>{
//     // res.send("Task successfully created");
// });

router.post('/task/create', protect, createTask);
router.get('/tasks', protect, getTasks);
router.get('/task/:id', protect, getTask);
router.patch('/task/:id', protect, updateTask);
router.delete('/task/:id', protect, deleteTask);
export default router;