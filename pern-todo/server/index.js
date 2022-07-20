const express = require('express')
const app = express()
const cors = require('cors')

//midwares
app.use(cors())
app.use(express.json())


app.listen(5000, ()=>{
    console.log('Server successfully running on port 5000')
})