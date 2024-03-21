import React from "react";
import "./HomeForm.scss";
import logo from "../../assets/images/logosvg.svg";

const HomeForm = () => {
  return (
    <section className="homeForm">
      <div className="logoDiv">
        <img src={logo} alt="MoodMusic Logo" />
      </div>
      <div className="heroText">
        <h1 className="heroText__text">Music for all Moods</h1>
        <p className="heroText__sub-text">sign up to discover</p>
      </div>

      <form className="signUpForm" action="">
        <div className="inputDiv">
          <label className="inputDiv__label" htmlFor="">Name</label>
          <input
            className="inputDiv__nameinput"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="bioDiv">
          <label className="inputDiv__label" 
            htmlFor="">Bio</label>
          <textarea
          className="bioDiv__textarea"
           type="text" 
           name="bio"
          placeholder="A few words about you" />
        </div>

        <div className="buttonDiv">
          <button className="button">Find Your Mood</button>
        </div>
      </form>
    </section>
  );
};

export default HomeForm;
