import InfoBtn from "../InfoBtn/InfoBtn";
import RadioBtn from "../RadioBtn/RadioBtn";
import { useEffect, useState } from 'react';

export default function ProgramLength({ onNext, currentUser, setProgram }) {

  const [programName, setProgramName] = useState('');
  const [programLength, setProgramLength] = useState(null);
  const [programDays, setProgramDays] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  
  const [infoShown, setInfoShown] = useState(false);

  function createProgram(programName, programLength, programDays) {
    // Initialize the program with name, length, and days, and empty weeks array
    const program = {
      name: programName,
      length: programLength, // Number of weeks
      days: programDays, // Days per week
      weeks: [] // Array of weeks, each containing workouts
    };
  
    // Loop to create weeks based on programLength
    for (let i = 0; i < programLength; i++) {
      const week = {
        weekNumber: i + 1, // Number the weeks starting from 1
        workouts: [] // Array of workouts for each week
      };
  
      // Loop to create workouts (days) based on programDays
      for (let j = 0; j < programDays; j++) {
        const workout = {
          name: `Day ${j + 1}`, // Name the workouts based on day
          excercises: [] // You can populate exercises here later
        };
  
        week.workouts.push(workout);
      }
  
      program.weeks.push(week);
    }
  
    setProgram(program);
  }
  
  useEffect(() => {
    if (programName !== '' && programLength !== null && programDays !== null) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [programName, programLength, programDays]);

  const handleProgramNameChange = (e) => {
    setProgramName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createProgram(programName, programLength, programDays);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-8">
      <h2 className="text-2xl text-left">General Details</h2>
      <div className="flex flex-col space-y-4 w-full p-4">
        <input
          type="text"
          name="programName"
          id="programName"
          placeholder="Program Name"
          className="p-2 rounded-md w-[50%]"
          value={programName}
          onChange={handleProgramNameChange}
        />

        <h2 className='relative'>Program length (weeks) 
          <button type="button" onClick={() => setInfoShown(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full absolute text-xs w-4 h-4">
            i
          </button>
          <InfoBtn
            title={'Length Info'}
            text={'Program length is inclusive of a 1 week deload at the conclusion of your program'}
            visible={infoShown}
            onClose={() => setInfoShown(false)}
          />
        </h2>

        <div className="flex space-x-4">
          <RadioBtn id="length4" name="length" text="4" onChange={() => setProgramLength(4)} checked={programLength === 4} />
          <RadioBtn id="length6" name="length" text="6" onChange={() => setProgramLength(6)} checked={programLength === 6} />
          <RadioBtn id="length8" name="length" text="8" onChange={() => setProgramLength(8)} checked={programLength === 8} />
        </div>

        <h2>Days per week</h2>
        <div className="flex space-x-4">
          <RadioBtn id="day2" name="days" text="2" onChange={() => setProgramDays(2)} checked={programDays === 2} />
          <RadioBtn id="day3" name="days" text="3" onChange={() => setProgramDays(3)} checked={programDays === 3} />
          <RadioBtn id="day4" name="days" text="4" onChange={() => setProgramDays(4)} checked={programDays === 4} />
          <RadioBtn id="day5" name="days" text="5" onChange={() => setProgramDays(5)} checked={programDays === 5} />
          <RadioBtn id="day6" name="days" text="6" onChange={() => setProgramDays(6)} checked={programDays === 6} />
        </div>

        <button
          type="submit"
          className={`p-2 rounded text-white ${isFormValid ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'}`}
          disabled={!isFormValid}
        >
          Next
        </button>
      </div>
    </form>
  );
}