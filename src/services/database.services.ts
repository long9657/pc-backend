import { Db, MongoClient, ServerApiVersion } from 'mongodb'
import { config } from 'dotenv'
config()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pc.bagchof.mongodb.net/?appName=PC`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class Database {
  private db: Db
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('admin')
  }
  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect()
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      // Ensures that the client will close when you finish/error
      await this.client.close()
    }
  }
}

const database = new Database()
export default database
