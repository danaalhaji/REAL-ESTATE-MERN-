import React from 'react';
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Signup() {
  const [formData , setFormData] = useState({});
  const[error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleChange = (e) =>{
    if(loading === true){
      setLoading(false)
    }
    setFormData ({
        ...formData,
        [e.target.id] :e.target.value,
      })
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/api/auth/signup', 
        {
          method : 'POST',
          headers :{
            'content-Type' : 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        
        if(data.success === false){
          setLoading(false)
          setError(data.message)
          return;
        }
        setLoading(false);
        setError(false)
        navigate('/signin')
        console.log(data);
        console.log(formData);
      }catch(error){
        setLoading(false);
          setError(error.message);
      }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'  onChange={handleChange}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80' >{loading ? "...Loading" : "Sign up"}</button>
        <OAuth></OAuth>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an acoount?</p>
        <Link to={"/signin"}>
        <span className='text-blue-700'>Sign in</span>
          </Link>
      </div>
      {error && <p className='text-red-600'>{error}</p>}
    </div> 
  )
}
