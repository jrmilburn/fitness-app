import Excercise from "../components/excercise/Excercise";
import WorkoutHeader from "../components/WorkoutHeader/WorkoutHeader";
import SelectWorkout from "../components/SelectWorkout/SelectWorkout";
import { AuthContext } from "../context/Authcontext";
import { useContext } from "react";
import { useState, useEffect } from 'react';

export default function CurrentWorkout() {

    const { currentUser } = useContext(AuthContext);
    const [workout, setWorkout] = useState();
    const [program, setProgram] = useState();
    const [selectWorkout, setSelectWorkout] = useState(false);
    const [weekNumber, setWeekNumber] = useState(); // State to store week number

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/workout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            }
        })
        .then(response => response.json())
        .then(data => setProgram(data))
        .catch(error => console.error(error))
    }, [currentUser.token]);

    const handleSelectWorkout = () => {
        setSelectWorkout(true);
    }

    const handleWorkoutChange = (workoutId) => {
        const selectedWeek = program[0].Week.find(week => 
            week.Workout.some(workout => workout.id === workoutId)
        );
        const selectedWorkout = selectedWeek.Workout.find(workout => workout.id === workoutId);

        setWorkout(selectedWorkout);
        setWeekNumber(selectedWeek.weekNumber); // Store the week number
        console.log(selectedWorkout, `Week number: ${selectedWeek.weekNumber}`);
        setSelectWorkout(false);
    }

    if (!workout || selectWorkout) {
        return (
            <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto h-full">
                <SelectWorkout currentUser={currentUser} handleClick={handleWorkoutChange}/>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
            {/* Pass the week number to WorkoutHeader or display it wherever you need */}
            <WorkoutHeader selectWorkout={handleSelectWorkout} weekNumber={weekNumber} />
            {workout.Excercise.map((excercise, index) => (
                <Excercise key={index} excercise={excercise} />
            ))}
        </div>
    );
}