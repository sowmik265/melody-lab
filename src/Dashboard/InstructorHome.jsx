import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../Providers/AuthProvider';
import useClass from '../hooks/useClass';

const InstructorHome = () => {
    const {user} = useAuth(AuthContext);
    const [classes] = useClass();
    const myClass = classes.filter((my) => my.email === `${user?.email}`);
    return (
        <div>
            <Helmet>
                <title>Melody Lab | Instructor Home</title>
            </Helmet>

            <h3 className='text-rose-700 font-mono font-bold md:text-4xl text-2xl text-center my-10'>Hello , {user.displayName} !</h3>


            <div className="w-full gap-4 flex-wrap flex justify-center items-center sm:flex-row">


                <div className="w-full md:w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2 bg-yellow-500">
                    <div className="p-2 flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-7xl mb-2 text-rose-700">{myClass.length}</h2>
                        <p className="font-bold text-lg text-rose-700">Approved Classes</p>
                    </div>
                </div>

                <div className="w-full md:w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2 bg-blue-500">
                    <div className="p-2 flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-7xl mb-2 text-rose-700">5</h2>
                        <p className="font-bold text-lg text-rose-700">Students</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default InstructorHome;