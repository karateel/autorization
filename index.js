const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter.js')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:admin@cluster0.r7lb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        app.listen(PORT,() => console.log(`Server Works ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()