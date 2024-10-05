import { AuthContext } from "../../context/Authcontext"
import { useContext } from "react"

export default function CompleteWorkout({ workout, handleClick }) {
    

    return (

        <button onClick={() => handleClick(workout)}>Finish Workout</button>

    )

}