import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useInstructors from '../hooks/useInstructors';
import useClass from '../hooks/useClass';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    const [instructors] = useInstructors();
    const [classes] = useClass();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    return (
        <div>
            <Helmet>
                <title>Melody Lab | Admin Home</title>
            </Helmet>

            <h3 className='text-rose-700 font-mono font-bold md:text-4xl text-2xl text-center my-10'>Hello , {user.displayName} !</h3>


            <div className="w-full gap-4 flex-wrap flex justify-center items-center sm:flex-row">


                <div className="w-full md:w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2 bg-yellow-500">
                    <div className="p-2 flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-7xl mb-2 text-rose-700">{users.length}</h2>
                        <p className="font-bold text-lg text-rose-700">Users</p>
                    </div>
                </div>

                <div className="w-full md:w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2 bg-blue-500">
                    <div className="p-2 flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-7xl mb-2 text-rose-700">{instructors.length}</h2>
                        <p className="font-bold text-lg text-rose-700">Instructors</p>
                    </div>
                </div>

                <div className="w-full md:w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl m-2 bg-green-500">
                    <div className="p-2 flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-7xl mb-2 text-rose-700">{classes.length}</h2>
                        <p className="font-bold text-lg text-rose-700">Classes</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;