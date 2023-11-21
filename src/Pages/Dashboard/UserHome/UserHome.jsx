import React from 'react';
import useAuth from '../../../hook/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className='text-2xl text-orange-500 font-bold text-center p-4'>Hi Welcome back {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;