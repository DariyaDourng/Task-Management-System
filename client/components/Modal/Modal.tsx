'use client';
import { useTasks } from '@/context/taskContext';
import React, { useEffect } from 'react'

function Modal() {
  
  const {task, handleInput, createTask} = useTasks();
  
  useEffect(()=> {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTask(task );
  }
  return (
    <div className='fixed left-0 top-0 z-50 h-full w-full bg-[#333]/30 overflow-hidden'>
      <form action="" className='py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md'
      onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Title</label>
          <input type="text" className='bg-[#F9F9F9] p-2 rounded-md border'
          placeholder='Task Title'
          name='title'
          value={task.title}
          onChange={(e) => handleInput('title')(e)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="description">
            Description
          </label>
          <textarea name="description" id=""
                    placeholder='Task Description'
                    className='bg-[#F9F9F9] p-2 rounded-md border resize-none'
                    rows={4}
                    value={task.description}
                    onChange={(e) => handleInput('description')(e)}
            >
            </textarea> 
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="priority">Select Priority</label>
          <select 
          className='bg-[#F9F9F9] p-2 rounded-md border cursor-pointer'
          name="priority" id=""
          value={task.priority}
          onChange={(e) => handleInput('priority')(e)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="dueDate">Due Date</label>
          <input type="date"
          className='bg-[#F9F9F9] p-2 rounded-md border'
          name='dueDate'
          value={task.dueDate}
          onChange={(e) => handleInput('dueDate')(e)} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="completed">Task Completed</label>
          <div className='flex items-center justify-between bg-[#F9F9F9] p-2 rounded-md border-2 cursor-pointer'>

          <label htmlFor="completed">Completed</label>
          <div>
            <select name="completed" id=""
            className='bg-[#F9F9F9]'
            value={task.completed ? 'true' : 'false'}
            onChange={(e) => handleInput('completed')(e)}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          </div>
        </div>
        <div className='mt-8 '>
          <button type='submit'
          className={`text-white py-2 rounded-md w-full bg-green-500 transition duration-200 ease-in-out`}
          > 
            Create Task
          </button>
        </div>
      </form>

    </div>
  )
}

export default Modal;


