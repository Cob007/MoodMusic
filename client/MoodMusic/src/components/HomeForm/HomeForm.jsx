import React from 'react'
import logo from "../../assets/images/logo.png"

const HomeForm = () => {
    return (
        <section className='homeForm'>
            <div>
                <img src={logo} alt="MoodMusic Logo" />
            </div>
            <div>
                <h1>Music for all Moods</h1>
                <p>sign up to discover</p>
            </div>
            <form className='signUpForm' action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your name' />
                </div>

                <div>
                    <label htmlFor="">Bio</label>
                    <input type="text" placeholder='A few words about you' />
                </div>

                <div>
                    <button>Find Your Mood</button>
                </div>

            </form>

        </section>
    )
}

export default HomeForm