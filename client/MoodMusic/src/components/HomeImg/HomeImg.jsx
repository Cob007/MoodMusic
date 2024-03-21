import React from 'react'
import "./HomeImg.scss"
import dummyImg from "../../assets/images/bkdrop.png"

const HomeImg = () => {
    return (
        <main className='img-container'>
            <img className='img-container__img' 
            src={dummyImg} alt="moodmusic home image" />
        </main>
    )
}

export default HomeImg