import Excercise from "../components/excercise/Excercise";
import WorkoutHeader from "../components/WorkoutHeader/WorkoutHeader";

export default function CurrentWorkout() {

    return (
        <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
            <WorkoutHeader />
            <Excercise />
        </div>
    )

}