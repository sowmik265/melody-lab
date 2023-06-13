import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaCashRegister } from 'react-icons/fa';
import { MdNaturePeople } from 'react-icons/md';

const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-rose-700 text-yellow-300">
                    {/* {
                        isAdmin ?
                            <> */}
                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/manageusers"><FaCalendarAlt></FaCalendarAlt> Manage Users</NavLink></li>
                    <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Manage Classes</NavLink></li>
                    {/* </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> Student Home</NavLink></li>
                                <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                                <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            </>
                    } */}

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/instructors"><MdNaturePeople></MdNaturePeople> Our Instructors</NavLink></li>
                    <li><NavLink to="/classes"><FaCashRegister></FaCashRegister>Enroll Now</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;