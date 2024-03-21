import React, { useEffect, useState } from "react";
import "./SongsPage.scss";
import Nav from "../../../components/Nav/Nav";
import SongCard from "../../SongCards/SongCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const SongsPage = () => {
  const { userId } = useParams();
  const [audioList, setAudioList] = useState([]);

  const BASE_URL = "http://localhost:8080";

  const getMusicbyMood = async (mood) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/audio/${mood}`);
      console.log(res.data.data);
      setAudioList((prev) => res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserMood = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/profile/${userId}`);
      const userMood = res.data.data.mood;
      console.log(userMood);
      getMusicbyMood(userMood);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserMood();
  }, []);

  return (
    <section>
      <Nav />

      <div className="cardDisplay">
        {audioList.map((audio, index) => (
          <div key={index}>
            <SongCard audio={audio}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SongsPage;
