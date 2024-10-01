import { useState } from "react"
import Excercise from "./Excercise"
import MuscleGroups from "./MuscleGroups"

export default function Day({day}) {

    const [muscleGroupsShown, setMuscleGroupsShown] = useState(false);

    return (
        <>
        <div className="bg-gray-300 min-w-64 p-4 flex flex-col space-y-4">
            <h2 className="text-lg">{day}</h2>
            <div className="flex flex-col space-y-4">
                <Excercise muscle='Chest' excercise={'Bench'}/>
                <Excercise muscle='Chest' excercise={'Chest Fly'}/>
                <Excercise muscle='Chest' excercise={'Pulllup'}/>
            </div>
            <button className="bg-gray-200 p-2" onClick={() => setMuscleGroupsShown(true)}>Add Muscle Group +</button>

        </div>
        <MuscleGroups visible={muscleGroupsShown} onClose={() => setMuscleGroupsShown(false)} />
        </>

    )

}