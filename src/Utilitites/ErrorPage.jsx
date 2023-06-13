import { Link } from 'react-router-dom';
import ErrorAnimation from '../../src/assets/ErrorAnimation.json';
import Lottie from 'lottie-react'

const ErrorPage = () => {

    return (

        <div className='h-screen w-full bg-rose-700'>
            <Lottie className='h-80' animationData={ErrorAnimation}></Lottie>
            <div >
                <p className='text-center text-3xl font-bold'>Oops! Page not found.</p>
                <p className='text-center text-2xl font-bold mt-2'>Please check the URL or go back to the homepage.</p>
                <p className='text-center text-4xl font-bold mt-2 text-yellow-500'>
                    <Link to='/'>
                        <a href="homepage-url">
                            Go to Homepage
                        </a>
                    </Link>
                </p>
            </div>
        </div>





    );
};

export default ErrorPage;
