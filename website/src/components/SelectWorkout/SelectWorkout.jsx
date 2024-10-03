import { useEffect, useState } from "react";

export default function SelectWorkout({ currentUser, handleClick }) {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/workout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setWorkouts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [currentUser.token]);

    if (loading) {
        return (
            <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (workouts.length === 0) {
        return (
            <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
                <h1>No workouts available.</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-8 w-full mx-auto my-[25%] bg-gray-200">
            {/* Single container for all weeks and workouts */}
            <div className="flex justify-around w-full border-t-2 border-r-2 border-b-2 border-gray-400">
                {workouts[0].Week.map((week, index) => (
                    <div key={index} className="flex flex-col items-center border-solid border-l-2 border-gray-400 w-full p-4">
                        {/* Display week number without individual div borders */}
                        <h1 className="text-3xl font-bold mb-2">Week {week.weekNumber}</h1>
                        <div className="flex flex-col space-y-2">
                            {week.Workout.map((workout, index) => (
                                <div key={index} className="text-center p-2 bg-gray-100 m-2  hover:scale-105 transition duration-300">
                                    <button className="text-md font-semibold w-full h-full" onClick={() => handleClick(workout.id)} >Day {index + 1}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}