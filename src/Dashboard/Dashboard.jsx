import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaCashRegister } from 'react-icons/fa';
import { MdNaturePeople } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';
import { Helmet } from 'react-helmet-async';
import useInstructor from '../hooks/useInstructor';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../Providers/AuthProvider';
import SectionTile from '../Utilitites/SectionTile';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useAuth(AuthContext);

    return (
        <>
            <Helmet>
                <title>Melody Lab | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">



                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-rose-700 text-yellow-300">
                        {

                            isAdmin &&
                            <>
                                <li><NavLink to="/dashboard/adminhome"><img className='w-5 5-6' src="https://img.icons8.com/color/48/home--v1.png" alt="home--v1" /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"><img className='w-5 5-6' src="https://img.icons8.com/fluency/48/group.png" alt="group" /> Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageclasses"><img img className='w-5 5-6' src="https://img.icons8.com/color/48/book.png" alt="book" /> Manage Classes</NavLink></li>
                            </>
                            ||
                            isInstructor &&
                            <>
                                <li><NavLink to="/dashboard/instructorhome"><img className='w-5 5-6' src="https://img.icons8.com/color/48/home--v1.png" alt="home--v1" /> Instructor Home</NavLink></li>
                                <li><NavLink to="/dashboard/myclass"><img className='w-5 5-6' src="https://img.icons8.com/dusk/64/class.png" alt="class" />My Classes</NavLink></li>
                                <li><NavLink to="/dashboard/addclass"><img className='w-5 5-6' src="https://img.icons8.com/fluency/48/add.png" alt="add" /> Add Class</NavLink></li>
                            </>
                            ||
                            <>
                                <li><NavLink to="/dashboard/userhome"><img className='w-5 5-6' src="https://img.icons8.com/color/48/home--v1.png" alt="home--v1" /> Student Home</NavLink></li>
                                <li><NavLink to="/dashboard/selectedclasses"><img className='w-5 5-6' src="https://img.icons8.com/fluency/48/shopping-cart.png" alt="shopping-cart" /> My Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/enrolledclass"><img className='w-5 5-6' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-enrollment-university-flaticons-lineal-color-flat-icons.png" alt="external-enrollment-university-flaticons-lineal-color-flat-icons" /> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="/dashboard/paymenthistory"><img className='w-5 5-6' src="https://img.icons8.com/fluency/48/card-in-use.png" alt="card-in-use" /> Payment History</NavLink></li>
                            </>


                        }

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/instructors"><MdNaturePeople></MdNaturePeople> Our Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaCashRegister></FaCashRegister>Enroll Now</NavLink></li>
                    </ul>

                </div>
            </div>
        </>

    );
};

export default Dashboard;