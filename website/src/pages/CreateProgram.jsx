import React, { useState } from 'react';

import ProgramLength from '../components/CreateProgram/ProgramLength';
import ProgramExcercises from '../components/CreateProgram/ProgramExcercises';

import { AuthContext } from '../context/Authcontext';
import { useContext } from 'react';

export default function CreateProgram() {
  const [formPage, setFormPage] = useState(1);
    const { currentUser } = useContext(AuthContext);

    const [program, setProgram] = useState({
        name: "",
        length: 0,
        days: 0,
        weeks: [] // Initialize weeks as an empty array
      });

  const onNext = () => {
    setFormPage((prevPage) => prevPage + 1);
  };

  const handleSetProgram = (program) => {
    setProgram(program);
  }

  return (
    <div
      className={`w-[100%] mx-auto p-8 transition-all duration-300 ease-in-out ${formPage === 2 ? 'max-w-[100%]' : 'max-w-2xl'} h-[100%] flex items-center relative`}
    >
      <h2 className="absolute top-0 text-2xl">Meso Builder</h2>

      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out ${formPage === 2 ? 'h-[100%]' : 'h-[70%]'} w-full overflow-x-hidden flex`}
      >
        {formPage === 1 ? <ProgramLength onNext={onNext} currentUser={currentUser} setProgram={handleSetProgram} /> : formPage === 2 ? <ProgramExcercises program={program} setProgram={handleSetProgram} /> : null}
      </div>


    </div>
  );
}