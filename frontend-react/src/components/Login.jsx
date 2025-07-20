import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from  'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
const Login = () => {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const  {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

    const handleLogin = async (e) =>{
        e.preventDefault();
        setLoading(true)
        const userData = {username, password}
        console.log('userdata',userData)
    
    try{
        const response =await axios.post('http://localhost:8000/api/v1/token/',userData)
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
        console.log('Login Successful')
        setIsLoggedIn(true)
        navigate('/')
    } catch(error){
        console.error('Invalid Credential')
        setError("Invalid Credential")
        
    }finally{
        setLoading(false)
    }
}
  return (
    <>
        <div className='container'> 
          <div className="row">
            <div className="col-md-6 bg-light-dark p-5 rounded">
              <h3 className='text-light text-center'>Create an Account</h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Username' value = {username} onChange={(e)=>setUserName(e.target.value)}/>
              
              </div>
              <div className='mb-3'>
                  
                  <input type="password" className='form-control ' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                 
              </div>
              {error && <div className='text-danger'>{error}</div>}
              {loading ? (
                <button type='submit' className='btn btn-info d-block mx-auto'> <FontAwesomeIcon icon={faSpinner} spin/>Logging in ...</button>
              ):(
                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
              )}
              
            </form>
            </div>
          </div>
    
    
        </div>
        
        
        
        
        
        </>
  )
}

export default Login