import React, { useEffect, useState } from "react";
import "./SongCard.scss";
import playbutton from "../../assets/images/play.png";
import dummyImg from "../../assets/images/dummyImg.jpeg";

const SongCard = (props) => {
  const { audio } = props;
  console.log(audio);

  const BASE_URL = "http://localhost:8080";
  const imgUrl = `${BASE_URL}${audio?.poster}`;
  const _audioUrl = `${BASE_URL}${audio?.url}`;

  const [audioUrl] = useState(new Audio(_audioUrl));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audioUrl.play() : audioUrl.pause();
  }, [playing]);

  useEffect(() => {
    audioUrl.addEventListener('ended', () => setPlaying(false));
    return () => {
        audioUrl.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);


  return (
    <section className="songCard">
      <div className="songImgContainer">
        <img className="songImg" src={imgUrl} alt="song img" />
      </div>

      <div className="songInfo">
        <h3>Song: {audio?.title}</h3>
        <h3>Artist: {audio?.author}</h3>
        <p>Description: {audio?.desciption} </p>
        <p onClick={toggle} className="playButton">
            {playing ? "Pause" : "Play"}
        </p>
      </div>
    </section>
  );
};

export default SongCard;
