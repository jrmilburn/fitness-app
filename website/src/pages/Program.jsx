import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import ViewDay from '../components/ViewProgram/ViewDay';

export default function Program() {

    const [loading, setLoading] = useState(true);
    const { programid } = useParams();
    const [program, setProgram] = useState(null);

    const handleCopy = async () => {



    }

    useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/mesocycle/${programid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProgram(data);
                setLoading(false);
            })
            .catch(error => console.error(error))
    }, [programid]);


    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
        
                <div
                className={`bg-gray-200 transition-all duration-300 ease-in-out h-[100%] w-full overflow-x-hidden flex`}
                >
                        <form className="w-full p-8 overflow-x-scroll">

                        <h2 className="text-2xl text-left">Excercises</h2>
                
                        <div className="flex space-x-4 w-full p-4 mr-8">
                
                            {program[0].Week[0].Workout.map((day, index) => (
                                <ViewDay key={index} day={day.name} excercises={day.Excercise}/>
                            ))}
                        </div>
                         <button type='button' onClick={handleCopy} className='absolute bottom-0 right-0 bg-blue-500 rounded p-2 text-white translate-x-[-50%] translate-y-[-100%]'>Use This Meso</button>
                
                        </form>
                </div>
        </>
    )

}