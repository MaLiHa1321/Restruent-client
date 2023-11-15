
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import userAxiosSecure from '../../hook/userAxiosSecure';
import SocialLink from './SocialLink';


const Register = () => {
  const axiosPublic = userAxiosSecure()
  const {createUser,updateUser} = useAuth()
  const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
  
        createUser(data.email, data.password)
        .then(res => {
          const user = res.user;
          console.log(user)
          updateUser(data.name, data.photoURL)
          .then(() =>{
            const userInfo = {
              name: data.name,
              email: data.email
            }
                
       axiosPublic.post('/users', userInfo)
       .then(res => {
        if(res.data.insertedId){
          console.log("user added to the database")
          reset();
          navigate('/')
        }
       })
          
          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
      }

  
    return (
    <div>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-full md:w-1/2 md:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="User name" {...register("name", { required: true })} className="input input-bordered"/>
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="User photo" {...register("photoURL", { required: true })} className="input input-bordered"/>
                {errors.photoURL && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", 
                 {required: true,
                   minLength: 6,
                    maxLength: 20,
                
                  })}
                  className="input input-bordered" required />
                   {/* pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )$/ */}
                {errors.password?.type=== "minLength" && <p>password must be 6 characters</p>}
                {errors.password?.type=== "maxLength" && <p>password must be 20 characters</p>}
                {/* {errors.password?.type=== "pattern" && <p>password must 1 uppercase, 1 lowercase, 1 special character</p>} */}
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Register" className='btn btn-primary' />
              </div>
            </form>
            <div className='p-4'>
                <Link to="/login">
                <p>Already have an account?</p>
                </Link>
            </div>
            <SocialLink></SocialLink>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;