import { AuthContext } from "../../context/Authcontext"
import { useContext } from "react"

export default function CompleteWorkout({ workout }) {

    const { currentUser } = useContext(AuthContext);

    const handleFinishWorkout = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/workout`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            },
            body: JSON.stringify({
                workoutId: workout.id,
                completed: true
            })
        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    }

    return (

        <button onClick={handleFinishWorkout}>Finish Workout</button>

    )

}