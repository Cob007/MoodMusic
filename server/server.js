const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());


const port = process.env.PORT || 8080

const profileRouter = require('./routes/profile')
const audioRouter = require('./routes/audio')

app.use("/testing", (req, res)=>{
    res.json("All our apis are working as expected! thanks ^=^")
})

app.use('/api', [profileRouter, audioRouter])

app.listen(port, ()=> {
    console.log(`Server is running late at ${port}`)
})



