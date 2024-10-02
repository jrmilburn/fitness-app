import Day from './Day';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProgramExcercises({ program, setProgram, currentUser}) {

    const navigate = useNavigate();
    const [sendingProgram, setSendingProgram] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCreate = async () => {
        
        setSendingProgram(true);

        console.log(currentUser);

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/mesocycle`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser}`
            },
            body: JSON.stringify(program)

        });

        if (response.ok) {
            setProgram(null);
        }

        setSendingProgram(false);
        navigate('/app');

    }

    return (

        <>
            {sendingProgram ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-lg">Creating Meso...</div>
                </div>
                ): (
                            <form onSubmit={handleSubmit} className="w-full p-8 overflow-x-scroll">

                            <h2 className="text-2xl text-left">Excercises</h2>
                    
                            <div className="flex space-x-4 w-full p-4 mr-8">
                    
                                {program.weeks[0].workouts.map((day, index) => (
                                    <Day key={index} day={day.name} setProgram={setProgram} />
                                ))}
                            </div>
                             <button type='button' onClick={handleCreate} className='absolute bottom-0 right-0 bg-blue-500 rounded p-2 text-white translate-x-[-50%] translate-y-[50%]'>Create Meso</button>
                    
                            </form>
                )}
        </>
    )

}