import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as process from 'process'
import connectToDB from './connect'
import scoreRoutes from './routes/score'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors({ credentials: true, origin: process.env.CLIENT_HOST }))
app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(scoreRoutes)

app.listen(PORT, () => {
    console.log(`Сервер запущен на: ${PORT}`)
    connectToDB()
})
