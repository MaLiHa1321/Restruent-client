import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import useAuth from '../../hook/useAuth';
import userAxiosSecure from '../../hook/userAxiosSecure';
import { useNavigate } from 'react-router-dom';

const SocialLink = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = userAxiosSecure()
    const navigate = useNavigate()
    const handleGoogle = () =>{
       googleSignIn()
       .then(res => {
        console.log(res.user)
        const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
            console.log(res.data)
            navigate('/')
        })
       })
       .catch(err => console.log(err))
    }
    return (
        <div className='w-1/2 mx-auto p-4'>

        <button onClick={handleGoogle} className="btn btn-secondary text-white">
       <AiFillGoogleCircle></AiFillGoogleCircle>
        Google
      </button>
        </div>
    );
};

export default SocialLink;