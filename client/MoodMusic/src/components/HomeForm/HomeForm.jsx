import React from 'react';
import "./HomeForm.scss";
import logo from "../../assets/images/logo.png";

const HomeForm = () => {
    return (
        <section className='homeForm'>
            <div className='logoDiv'>
                <img src={logo} alt="MoodMusic Logo" />
            </div>
            <div className='heroText'>
                <h1>Music for all Moods</h1>
                <p>sign up to discover</p>
            </div>

            <form className='signUpForm' action="">
                <div className='inputDiv'>
                    <label htmlFor="">Name</label>
                    <input className='nameInput' type="text" placeholder='Enter your name' />
                </div>

                <div className='bioDiv'>
                    <label htmlFor="">Bio</label>
                    <input type="text" placeholder='A few words about you' />
                </div>

                <div className='buttonDiv'>
                    <button className='button'>Find Your Mood</button>
                </div>

            </form>

        </section>
    )
}

export default HomeForm