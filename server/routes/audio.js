const express = require("express");
const router = express.Router();
const fs = require("fs");

const readAudioFromFile = () => {
  return fs.readFileSync("./data/audiolist.json");
};

router.get("/audio", (req, res) => {
  try {
    const audioList = JSON.parse(readAudioFromFile());
    const resModel = {
      status: 200,
      message: 'audio list has been fetched',
      data: audioList
    };
    res.status(200).send(resModel);
  } catch (err) {
    const resModel = {
      status: 404,
      message: `error 404 beacuse ${err}`,
    };
    res.status(404).send(resModel);
  }
});

router.get("/audio/:mood", (req, res)=> {
    try {
        const queryMood = req.params.mood
        const audioList = JSON.parse(readAudioFromFile());
        const filterAudioByMood = audioList.filter((audio) => audio.mood ===queryMood)
        const resModel = {
          status: 200,
          message: `audio list has been filtered by ${queryMood}`,
          data: filterAudioByMood
        };
        res.status(200).send(resModel);
      } catch (err) {
        const resModel = {
          status: 404,
          message: `error 404 beacuse ${err}`,
        };
        res.status(404).send(resModel);
      }
})



module.exports = router;
