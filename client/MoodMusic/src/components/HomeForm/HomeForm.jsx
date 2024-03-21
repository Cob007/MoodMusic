import React, { useState } from "react";
import "./HomeForm.scss";
import logo from "../../assets/images/logosvg.svg";

const HomeForm = (props) => {
  const { submitForm } = props;

  const [userInfo, setUserInfo] = useState({ name: "", bio: "", mood: "" });

  const handleNameChange = (e) => {
    setUserInfo((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleBioChange = (e) => {
    setUserInfo((prevState) => ({ ...prevState, bio: e.target.value }));
  };

  const handleMoodChange = (e) => {
    console.log(e.target.value);
    setUserInfo((prevState) => ({ ...prevState, mood: e.target.value }));
  };

  const handleClick = () => {
    console.log("here");
    if (userInfo.name.length <= 0 && userInfo.bio.length <= 0) {
      return alert("Please fill the form");
    }
    submitForm(userInfo);
  };

  return (
    <section className="homeForm">
      <div className="logoDiv">
        <img src={logo} alt="MoodMusic Logo" />
      </div>
      <div className="heroText">
        <h1 className="heroText__text">Music for all Moods</h1>
        <p className="heroText__sub-text">sign up to discover</p>
      </div>

      <div className="signUpForm" action="">
        <div className="inputDiv">
          <label className="inputDiv__label" htmlFor="">
            Name
          </label>
          <input
            className="inputDiv__nameinput"
            name="name"
            type="text"
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="bioDiv">
          <label className="inputDiv__label" htmlFor="">
            Bio
          </label>
          <textarea
            className="bioDiv__textarea"
            type="text"
            name="bio"
            onChange={handleBioChange}
            placeholder="A few words about you"
          />
        </div>

        <div className="bioMood">
          <label htmlFor="">select your Mood</label>
          <select
            className="bioMood__dropdown"
            onChange={handleMoodChange}
            name="moods"
            id="moods"
          >
            <option value="happy">Select Mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="mad">Mad</option>
          </select>
        </div>

        <div className="buttonDiv">
          <button className="button" onClick={handleClick}>
            Find Your Mood
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;
