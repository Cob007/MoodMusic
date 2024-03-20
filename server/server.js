const express = require('express')
const app = express()
app.use(cors())

const port = process.env.PORT || 8080


app.listen(port, ()=> {
    console.log(`Server is running late at ${PORT}`)
})



