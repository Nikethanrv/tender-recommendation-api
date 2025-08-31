const express = require('express')
const mongoose = require('mongoose')
const recommendationRoute = require("./routes/recommendationRoute.js")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/tender-recommendationDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use("/api/v1/recommendations", recommendationRoute)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
