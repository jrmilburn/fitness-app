import ViewExcercise from "./ViewExcercise"

export default function Day({day, excercises}) {

    console.log('DAY: ', day);

    return (
        <>
        <div className="bg-gray-300 min-w-64 p-4 flex flex-col space-y-4">
            <h2 className="text-lg">{day}</h2>
            <div className="flex flex-col space-y-4">

                {excercises.map((excercise, index) => (
                    <ViewExcercise key={index} muscle={excercise.MuscleGroup.name} excercise={excercise.name}/>
                ))}
            
            </div>
        </div>
        </>

    )

}