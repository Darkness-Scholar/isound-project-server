import ytdl = require("ytdl-core")
import ytsr = require("ytsr")
import ytpl = require("ytpl")
import express = require("express")
import cors = require("cors")
import bodyParser = require('body-parser')
import http = require("http")
import { Server } from "socket.io"

import audio from "./routes/audio/audio.route"
import { getAudioInfo } from "./routes/audio/audio.service"

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})

async function main () {
    
}

main()

app.use("/audio", audio)

io.on("connection", (socket) => {
    socket.on("disconect", () => {
        console.log("User disconnected")
    })
    socket.on("message", (message) => {
        console.log(`message: ${message}`);
        io.emit("message", message);
    })
})

let PORT = process.env.PORT || 8888;
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })