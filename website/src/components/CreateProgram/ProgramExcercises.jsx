import Day from './Day';

export default function ProgramExcercises({ program, setProgram}) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCreate = () => {
        console.log(program);
    }

    return (
        <form onSubmit={handleSubmit} className="w-full p-8 overflow-x-scroll">

        <h2 className="text-2xl text-left">Excercises</h2>

        <div className="flex space-x-4 w-full p-4 mr-8">

            {program.weeks[0].workouts.map((day, index) => (
                <Day key={index} day={day.name} />
            ))}
        </div>
      <button onClick={handleCreate} className='absolute bottom-0 right-0 bg-blue-500 rounded p-2 text-white translate-x-[-50%] translate-y-[50%]'>Create Meso</button>

        </form>
    )

}