import React from 'react'
import "./HomeImg.scss"
import dummyImg from "../../assets/images/dummyImg.jpeg"

const HomeImg = () => {
    return (
        <main className='homeImgComponent'>
            <img className='homeImg' src={dummyImg} alt="moodmusic home image" />
        </main>
    )
}

export default HomeImg