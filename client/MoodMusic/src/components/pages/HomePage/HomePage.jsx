import React from 'react'
import "./HomePage.scss"
import HomeImg from '../../HomeImg/HomeImg'
import HomeForm from '../../HomeForm/HomeForm'

const HomePage = () => {
    return (
        <main className='homePage'>
            <div className='homePage__img'>
                <HomeImg />
            </div>
            <div className='homePage__form'>
                <HomeForm />
            </div>
           
        </main>
    )
}

export default HomePage