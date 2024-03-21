import React from 'react'
import "./HomePage.scss"
import HomeImg from '../../HomeImg/HomeImg'
import HomeForm from '../../HomeForm/HomeForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const  navigate  = useNavigate();

    const BASE_URL = "http://localhost:8080"

    const submitForm = async ( data) => {
        console.log("data", data)
        try {
            const res = await axios.post(`${BASE_URL}/api/profile/create`, data)
            const userId = res.data.id;
            console.log(userId)
            navigate(`/songs/${userId}`)
        } catch(err){
            console.log(err)
        }
    } 

    return (
        <main className='homePage'>
            <div className='homePage__img'>
                <HomeImg />
            </div>
            <div className='homePage__form'>
                <HomeForm  submitForm={submitForm}/>
            </div>
           
        </main>
    )
}

export default HomePage