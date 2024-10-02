import Mesocycle from "../components/MesoCycle/Mesocycle"
import { useState, useEffect } from "react"
import { AuthContext } from "../context/Authcontext"
import { useContext } from "react"


export default function MesoCycles() {

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_BACKEND_URL}/mesocycle`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

    })

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