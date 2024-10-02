import { useState } from "react"
import Excercise from "./Excercise"
import MuscleGroups from "./MuscleGroups"

export default function Day({day, setProgram}) {

    const [muscleGroupsShown, setMuscleGroupsShown] = useState(false);
    const [muscleGroups, setMuscleGroups] = useState([]);

    const addMuscleGroup = (muscleGroup) => {
        setMuscleGroups([...muscleGroups, muscleGroup]);
        console.log(muscleGroup);
        setMuscleGroupsShown(false);
    }

    return (
        <>
        <div className="bg-gray-300 min-w-64 p-4 flex flex-col space-y-4">
            <h2 className="text-lg">{day}</h2>
            <div className="flex flex-col space-y-4">

                {muscleGroups.map((muscleGroup, index) => (
                    <Excercise key={index} excerciseindex={index} muscle={muscleGroup.name} excercise={'Bench'} setProgram={setProgram} day={day}/>
                ))}
            
            </div>
            <button className="bg-gray-200 p-2" onClick={() => setMuscleGroupsShown(true)}>Add Muscle Group +</button>

        </div>
        <MuscleGroups visible={muscleGroupsShown} onClose={() => setMuscleGroupsShown(false)} onAdd={addMuscleGroup} />
        </>

    )

}