import Excercise from "../components/excercise/Excercise";

export default function CurrentWorkout() {

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold my-8">Current Workout</h1>
            <Excercise />
        </div>
    )

}