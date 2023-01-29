require('dotenv').config()

const jobs = require('./mock_data.json')
const Job = require('./models/Job')
const connectDB = require('./db/connect')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(jobs)
        console.log("success!")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()