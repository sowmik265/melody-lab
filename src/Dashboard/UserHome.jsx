import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user?.displayName}
            this is user homee yooooo bitch
        </div>
    );
};

export default UserHome;