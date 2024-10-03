import { Link } from 'react-router-dom';

export default function Mesocycle({ program, currentUser, handleSetCurrentProgram }) {   



    return (
        <div>
            <div className={`w-[100%] h-full mx-auto ${currentUser.user.programId === program.id ? ('bg-green-100') : ('bg-gray-200')} p-4 relative`}>
              <div className='w-[100%] flex justify-between p-2'>
                  <div>
                      <h2 className="text-xl">{program.name}</h2>
                      <p className="font-sm opacity-50">{program.length} Weeks - {program.days} Days / Week</p>
                  </div>
                  <div className='flex flex-col space-y-4'>
                    <Link to={`/app/mesocycles/${program.id}`}><button>View in Builder</button></Link>
                    {currentUser.user.programId === program.id ? (
                        <div className='absolute top-0 right-0 translate-y-[-80%] opacity-30'>
                            Current
                        </div>
                    ): (
                        <button onClick={() => handleSetCurrentProgram(program.id)}>Set Current</button>
                    )}
                  </div>
              </div>

              <div className=" w-[95%] h-[1px] absolute bottom-0 right-0 bg-gray-100">

              </div>

            </div>
        </div>
    )

}