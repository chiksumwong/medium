/** require dependencies (By npm install) */
const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const cloudinary = require('cloudinary')

const bodyParser = require('body-parser')
const helmet = require('helmet')

// ExpressJS's Router Method
const router = express.Router()
const routes = require('./routes/index')

// ExpressJS's Main Method
const app = express()


/** set up routes {API Endpoints} */
// Put 'router' to routes/index.js
routes(router)
app.use('/api', router)


/** configure cloudinary */
cloudinary.config({
    cloud_name: 'dvfyipg5k',
    api_key: '392491259175392',
    api_secret: 'sf4RZBE0-YZ3EMWV0b6yKnElXGU'
})


/** connect to MongoDB datastore */
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium"
const db_url = "mongodb://localhost:27017/medium"
try {
    mongoose.connect(db_url, {
        //useMongoClient: true
    })    
} catch (error) {
    
}


/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))


/** start server */
let port = process.env.PORT ||  5000
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});