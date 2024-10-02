import Excercises from './Excercises'; // Spelling fix
import { useState } from 'react';

export default function Excercise({ muscle, excerciseindex, excercise, setProgram, day }) {
  const [showExcercises, setShowExcercises] = useState(false);
  const [selectedExcercise, setSelectedExcercise] = useState(null); // Spelling fix

  const handleSelectExcercise = (excercise) => {
    if (selectedExcercise === excercise) return; // Avoid unnecessary state update

    setSelectedExcercise(excercise);
    setProgram((prev) => {
      const newProgram = { ...prev };
      newProgram.weeks[0].workouts.forEach((workout) => {
        if (workout.name === day) {

            console.log(workout.excercises);

            if(workout.excercises.length <= excerciseindex) {
                workout.excercises.push({
                    muscle: muscle,
                    excercise: excercise,
                });
            } else {
                workout.excercises[excerciseindex] = {
                    muscle: muscle,
                    excercise: excercise,
                };
            }

        }
      });
      return newProgram;
    });
    setShowExcercises(false);
  };

  return (
    <>
      <div className="bg-gray-200 p-2 flex flex-col space-y-2 items-baseline">
        <h2 className="bg-gray-400 p-1">{muscle}</h2>
        <button
          onClick={() => setShowExcercises(true)}
          className="w-[100%] h-[100%] text-left border-solid border-2 border-gray-700 p-1"
        > 
          {selectedExcercise ? selectedExcercise : 'Select Excercise'}
        </button>
      </div>
      {showExcercises && ( // Conditionally render to avoid unnecessary rendering
        <Excercises
          muscle={muscle}
          visible={showExcercises}
          onClose={() => setShowExcercises(false)}
          selectExcercise={handleSelectExcercise}
        />
      )}
    </>
  );
}