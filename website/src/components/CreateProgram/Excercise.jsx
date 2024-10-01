import Excercises from './Excercises';
import { useState } from 'react';

export default function Excercise({ muscle, excercise }) {
 
    const [showExercises, setShowExercises] = useState(false);
    const [selectedExcercise, setSelectedExcercise] = useState(null);

    const handleSelectExcercise = (excercise) => {
        setSelectedExcercise(excercise);
        setShowExercises(false);
    }

    return (
        <>
        <div className="bg-gray-200 p-2 flex flex-col items-baseline">
            <h2 className='bg-gray-400 p-1'>{muscle}</h2>
            <button onClick={() => setShowExercises(true)} className='w-[100%] h-[100%] text-left'>{selectedExcercise ? selectedExcercise : 'Select Excercise'}</button>
        </div>
        <Excercises muscle={muscle} visible={showExercises} onClose={() => setShowExercises(false)} selectExcercise={handleSelectExcercise}/>
        </>
    )

}