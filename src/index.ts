import express, { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { MongoClient, ServerApiVersion } from 'mongodb'

const database: string = process.env.MONGO_DB_URL
const PORT = 4000

const clientDB = new MongoClient(database, {
  serverApi: {
    version: ServerApiVersion,
    strict: true,
    deprecationErrors: true,
  }
})
const server = express()
server.use(cors({
  credentials: true,
}))

server.get('/', (req: Request, res: Response, next: NextFunction) => {

})

// void because this returns 'nothing'
server.listen(PORT, (): void => {
  console.log('Listening on port', PORT)
})