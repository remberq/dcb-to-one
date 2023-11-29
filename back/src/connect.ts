import mongoose from "mongoose"

const {MONGODB_DATABASE, MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST} = process.env

const dbUrl = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.set('strictQuery', true);

const connectToDB = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log("База данных подключена")
    } catch (error: any) {
        console.error(error.message)
        setTimeout(connectToDB, 5000)
    }
}

export default connectToDB
