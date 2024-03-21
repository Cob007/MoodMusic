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

const updateFile = (_profile) => {
    fs.writeFileSync("./data/profile.json", JSON.stringify(_profile))
}

router.post("/profile/create", (req, res) => {
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

router.get("/profile/:profileId", (req, res)=> {
    try{
        const profileId = req.params.profileId
        const currentProfiles = JSON.parse(readProfileFromFile())
        const profile = currentProfiles.find((prof) => prof.id === profileId)
        const resModel = {
            "status" : 200,
            "message" : profile === undefined? "This profile is not found!": "Your profile has been fetched",
            "data" : profile === undefined ? {} : profile
        }
        res.status(200).send(resModel)
    }catch (err){
        res.status(404).send(`error 404 beacuse ${err}`)
    }
})

router.post("/profile/changemood/:profileId", (req, res)=> {
    try{

        const reqBody = req.body;

        const profileId = req.params.profileId
        let currentProfiles = JSON.parse(readProfileFromFile())
        const profile = currentProfiles.find((prof) => prof.id === profileId)

        const updatedProfile = {
            ...profile, 
            mood: reqBody.mood
        }

        currentProfiles = [
            ...currentProfiles.filter((_profile) => _profile.id !== profileId), 
            updatedProfile
        ]

        updateFile(currentProfiles)

        const resModel = {
            "status" : 200,
            "message" : "Your profile has been updated"
        }

        res.status(200).send(resModel)
    }catch (err){
        const resModel = {
            "status" : 404,
            "message" : `error 404 beacuse ${err}`
        }
        res.status(404).send(resModel)
    }
})



module.exports = router;
