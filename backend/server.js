const express = require("express")
const cors = require("cors");
const connectDB = require("./database/connect");
const { uploadData } = require("./uploadingDatatoDB");


const app = express()
const PORT = 8000;

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
  res.send("hello from backend")
})

app.listen(PORT, () => console.log(`app is running on port http://localhost:${PORT}`))


// Connect to MongoDB
connectDB();
uploadData()