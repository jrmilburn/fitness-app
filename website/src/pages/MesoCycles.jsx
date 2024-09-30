import Mesocycle from "../components/MesoCycle/Mesocycle"

export default function MesoCycles() {
    return (

        <div className="flex flex-col max-w-2xl mx-auto">
            <div className="w-[95%] mx-auto rounded-md p-4 text-2xl">
                <h1>Mesocycles</h1>
            </div>
            <Mesocycle />
            <Mesocycle />
            <Mesocycle />
        </div>


    )
}