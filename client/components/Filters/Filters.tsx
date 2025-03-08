import { useTasks } from '@/context/taskContext';
import React from 'react'

interface Props { 
    setPriority: (priority: string) => void;
    priority: string;
  }

function Filters() {
    const {priority, setPriority} = useTasks();
    
    const [activeIndex, setActiveIndex] = React.useState(0);


    const priorities=['All', ' Low', 'Medium', 'High'];
  return (
    <div className='relative py-2 px-2 grid grid-cols-4 items-center gap-3 bg-[#F9F9F9] border-2 border-white rounded-md '>
        <span className='absolute left-[5px] bg-[#EDEDED] rounded-md transition-all duration-300'
        style={{
            width: "calc(100%/ 4 - 10px)",
            height: "calc(100% - 10px)",
            top: "50%",
            transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 10}px)) translateY(-50%)`,
            transition: 'transform 300ms cubic-bezier(.95, .03,1,1)',
        }}
        ></span>
    {priorities.map((p, index) => (
        <button
        key={index}
         className={`relative px-1 z-10 text-sm rounded-md ${activeIndex === index ? "text-[#3aafae]" : "text-gray-500" }
         
         `}
         onClick={() => {
            setActiveIndex(index);
            setPriority(priority.toLowerCase() === p.toLowerCase() ? '': p.toLowerCase());
         }}
        >
            {p}
        </button>
        ))}
      {/* Filter */}
    </div>
  )
}

export default Filters;
