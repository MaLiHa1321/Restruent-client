import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Login = () => {
    const captchaRef = useRef(null);
    const [disable,setDisable] = useState(true)
    const {loginUser} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

 

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(res => {
          const user = res.user;
          Swal.fire({
            title: "User logIn successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace: true})
        })
        .catch(err => console.log(err))

    
    }
    const handleValidateCaptcha = (e) =>{
      const user_captcha_value = e.target.value;
      if(validateCaptcha(user_captcha_value)){
          setDisable(false)
      }
  
  

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="type the captcha above" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
              <input disabled={disable} type="submit" value="Login" className='btn btn-primary' />
              </div>
            </form>
            <div className='p-4'>
            <Link to='/register'>
            <p>New here? Create an account</p>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;