import React from 'react'
import "./SongsPage.scss"
import Nav from "../../../components/Nav/Nav"
import SongCard from '../../SongCards/SongCard'


const SongsPage = () => {
    return (
        <section>
            <Nav />

            <div className='cardDisplay'>
                <SongCard />
                <SongCard />
                <SongCard />
            </div>
        </section>
    )
}

export default SongsPage