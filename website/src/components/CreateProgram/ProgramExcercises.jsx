import Day from './Day';

export default function ProgramExcercises() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="w-full p-8 overflow-x-scroll">

        <h2 className="text-2xl text-left">Excercises</h2>

        <div className="flex space-x-4 w-full p-4 mr-8">
            <Day day="Day 1" />
            <Day day="Day 2" />
            <Day day="Day 3" />
            <Day day="Day 4" />
        </div>

        </form>
    )

}