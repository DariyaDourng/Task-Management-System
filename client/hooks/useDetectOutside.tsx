'use client';
import React, { useEffect } from 'react'

interface DetectOutsieProp{
    ref: React.RefObject<HTMLDivElement>
    callback: () => void;

}

function useDetectOutside({ref, callback}: DetectOutsieProp) {

    //handler to detect click outside the ref
    useEffect(()=> {
        const handleClickOUtside = (event: any)=> {
            if (ref.current && !ref.current.contains(event.target)){
                callback();

            }
        };
        document.addEventListener('mousedown', handleClickOUtside);

        //clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOUtside);
        }
    }, [ref, callback])

    return ref

    
}
export default useDetectOutside;
