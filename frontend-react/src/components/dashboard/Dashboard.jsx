import React, {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'
const Dashboard = () => {
    // const accessToken= localStorage.getItem('accessToken')
    useEffect(() =>{
        const fetchProtectedData = async ()=>{
            try{
                const response = await axiosInstance.get('/protected-view/')
                console.log('Siccess:', response.data)
                
            }catch(error){
                console.error("Error fetching Data")
            }
        }
        fetchProtectedData()
    },[])
  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard