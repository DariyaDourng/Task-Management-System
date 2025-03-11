import { edit, star, trash } from '@/utils/Icons';
import { Task } from '@/utils/types';
import React from 'react';


interface TaskItemProps {
    task: Task;
}

function TaskItem({ task }: TaskItemProps) {
    // Function to get color based on priority
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'low':
                return 'text-green-500';
            case 'medium':
                return 'text-yellow-500';
            case 'high':
                return 'text-red-500';
            default:
                return 'text-green-500';
        }
    }; // 🔹 FIXED: Closing bracket was missing

    // Dummy formatTime function (Replace with actual function)
    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    }; // 🔹 FIXED: Added missing function

    return (
        <div className='h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white '>
            <div>
                <h4 className='font-bold text-2xl'>{task.title}</h4>
                <p>{task.description}</p>

            </div>
                <div className='mt-auto flex justify-between items-center'>
                    <p className='text-sm text-gray-400'>{formatTime(task.createdAt)}</p>
                    <p className={`text-sm font-bold ${getPriorityColor(task.priority)}`}>{task.priority}</p>

                    <div>
                      <div className='flex items-center gap-3 text-gray-400 text-[1.2rem]'>
                        <button
                        className={`${task.completed ? 'bg-yellow-400' : 'text-gray-400'}`}>{star}

                        </button>
                        <button className='text-[#00A1F1]'>{edit}</button>
                        <button className='text-[#F65314]'>{trash}</button>
                      </div>
                    </div>
                </div>
        </div>
    );
}

export default TaskItem;
