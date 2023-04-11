const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(express.json())

app.use(cors())

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


const db = require("./db.js")

const userRoute = require("./routes/userRoute.js")

app.use("/", userRoute)

app.get("/", (req, res) => {
    res.json("This pdf edit app")
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Started on Port ${port}`))