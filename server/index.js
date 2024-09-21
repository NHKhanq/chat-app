import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
const databaseURL = process.env.DATABASE_URL

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}))

app.use(cookieParser())

//body
app.use(express.json())

//connect db
mongoose.connect(databaseURL).then(() => {
    console.log("DB connect");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })