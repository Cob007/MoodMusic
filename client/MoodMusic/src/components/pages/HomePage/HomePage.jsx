import React from 'react'
import "./HomePage.scss"
import HomeImg from '../../HomeImg/HomeImg'
import HomeForm from '../../HomeForm/HomeForm'

const HomePage = () => {
    return (
        <main className='homePage'>
            <HomeImg />
            <HomeForm />
        </main>
    )
}

export default HomePage