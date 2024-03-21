import React from 'react'
import "./SongCard.scss"
import playbutton from "../../assets/images/play.png"
import dummyImg from "../../assets/images/dummyImg.jpeg"

const SongCard = () => {
    return (
        <section className='songCard'>
            <div className='songImgContainer'>
                <img className='songImg' src={dummyImg} alt="song img" />
            </div>

            <div className='songInfo'>
                <h3>Song: </h3>
                <h3>Artist: </h3>
                <p>Description: </p>
            </div>



        </section>
    )
}

export default SongCard