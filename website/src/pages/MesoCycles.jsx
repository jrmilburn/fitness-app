import Mesocycle from "../components/MesoCycle/Mesocycle"
import { useState, useEffect } from "react"
import { AuthContext } from "../context/Authcontext"
import { useContext } from "react"


export default function MesoCycles() {

    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const [programs, setPrograms] = useState([]);

    const handleSetCurrentProgram = async (programid) => {

        setCurrentUser({
            ...currentUser,
            user: {
              ...currentUser.user, 
              programId: programid, 
            }});

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            },
            body: JSON.stringify({ programId: programid })
        });

    }

    useEffect(() => {

        fetch(`${import.meta.env.VITE_BACKEND_URL}/mesocycle`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            },
        })
        .then(response => response.json())
        .then(data => setPrograms(data))
        .catch(error => console.error(error))

    }, [currentUser.user, currentUser.token]);

    return (

        <div className="flex flex-col max-w-2xl mx-auto">
            <div className="w-[95%] mx-auto rounded-md p-4 text-2xl">
                <h1>Mesocycles</h1>
            </div>

            {programs.map((program, index) => (
                <Mesocycle key={index} program={program} currentUser={currentUser} handleSetCurrentProgram={handleSetCurrentProgram} />
            ))}
        </div>


    )
}