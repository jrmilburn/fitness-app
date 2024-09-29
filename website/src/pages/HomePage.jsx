import { Link } from 'react-router-dom';

import Button from '../components/button/Button';

export default function HomePage() {

    const handleLogin = () => {
        
    }

    return (
        <main className='flex min-h-screen flex-col p-6 max-w-screen'>

            <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md: h-52'>

            </div>

            <div className='mt-4 flex grow flex-col gap-4 md:flex-grow'>

                <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>

                    <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Welcome to JFit.</strong> Click below to login to the app.
                    </p>
                    <Link to='/login'>
                    <Button 
                        text={'Log in'}
                        onClick={handleLogin}
                        />
                    </Link>

                </div>

                <div>
                {/* Hero images go here*/}
                </div>


            </div>

        </main>



    )

}