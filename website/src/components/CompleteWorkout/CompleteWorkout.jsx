export default function CompleteWorkout() {

    const handleFinishWorkout = async ({ workout }) => {
        const repsonse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/workout`, {
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
    }

    return (

        <button onClick={handleFinishWorkout}>Finish Workout</button>

    )

}