import Excercises from './Excercises';
import { useState } from 'react';

export default function Excercise({ muscle, excercise }) {
 
    const [showExercises, setShowExercises] = useState(false);

    return (
        <>
        <div className="bg-gray-200 p-2 flex flex-col items-baseline">
            <h2 className='bg-gray-400 p-1'>{muscle}</h2>
            <button onClick={() => setShowExercises(true)} className='w-[100%] h-[100%] text-left'>Select Excercise</button>
        </div>
        <Excercises visible={showExercises} onClose={() => setShowExercises(false)}/>
        </>
    )

}