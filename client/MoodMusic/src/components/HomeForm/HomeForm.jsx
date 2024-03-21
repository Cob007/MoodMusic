import React from 'react';
import "./HomeForm.scss";
import logo from "../../assets/images/logo.png";

const HomeForm = () => {

    // const form = document.querySelector('.signUpForm');
    // const nameInput = document.querySelector('.nameInput');
    // const bioInput = document.querySelector('.bioDiv input');

    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const name = nameInput.value;
    //     const bio = bioInput.value;

    //     console.log('Name:', name);
    //     console.log('Bio:', bio);

    //     form.reset();
    // });

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

                <div>
                    <label htmlFor="">select your Mood</label>
                    <select className='dropDown' name="moods" id="moods">
                        <option value="hapy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="mad">Mad</option>
                    </select>
                </div>



                <div className='buttonDiv'>
                    <button className='button'>Find Your Mood</button>
                </div>

            </form>

        </section>
    )
}

export default HomeForm


