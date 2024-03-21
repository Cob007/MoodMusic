const express = require("express");
const router = express.Router();
const fs = require('fs')
const { v4: uniqueIdGenerator } = require("uuid");

const readProfileFromFile = () => {
    return fs.readFileSync('./data/profile.json')
}

const writeToFile = (profile) => {
    const currentProfile = JSON.parse(readProfileFromFile())
    fs.writeFileSync("./data/profile.json", JSON.stringify([...currentProfile, profile]))
};

router.post("/createprofile", (req, res) => {
  try {
    const reqBody = req.body;
    const profile = {
      ...reqBody,
      id: uniqueIdGenerator(),
      createdAt: Date.now(),
      isActive: true,
    };
    writeToFile(profile);
    res.status(201).json(profile);
  } catch (err) {
    res.status(404).send(`error 404 beacuse ${err}`)
  }
});

module.exports = router;
