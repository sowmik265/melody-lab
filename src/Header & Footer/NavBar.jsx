import React, { useContext } from 'react';
import ActiveLink from '../Utilitites/ActiveLink';
import { GiMusicalKeyboard } from 'react-icons/gi';
import { AuthContext } from '../Providers/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navTool = <>
        <li className='font-extrabold'><ActiveLink to='/'>HOME</ActiveLink></li>
        <li className='font-extrabold'><ActiveLink to='/instructors'>INSTRUCTORS</ActiveLink></li>
        <li className='font-extrabold'><ActiveLink to='/classes'>CLASSES</ActiveLink></li>
        <li className='font-extrabold'><ActiveLink to='/dashboard'>DASHBOARD</ActiveLink></li>
        {
            user ?
                <>
                    <li>
                        <div><img className='w-8 h-8 rounded-full' src={user?.photoURL} title={user?.displayName} /></div>
                    </li>
                    <li className='font-extrabold'><button onClick={handleLogOut}><ActiveLink>Logout</ActiveLink></button></li>
                </> :
                <li className='font-extrabold'><ActiveLink to='/signin'>LOGIN</ActiveLink></li>
        }
    </>

    return (
        <div>
            <div className="navbar bg-rose-700 p-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-700 rounded-box w-52 text-gray-300">
                            {navTool}
                        </ul>
                    </div>
                    <a className="btn btn-ghost  text-4xl font-bold text-gray-300 font-mono">
                        MELODY<GiMusicalKeyboard></GiMusicalKeyboard>LAB<span className='text-3xl font-extrabold'>.</span>
                    </a>
                </div>
                <div className="navbar-middle hidden lg:flex text-gray-300">
                    <ul className="menu menu-horizontal px-1">
                        {navTool}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;