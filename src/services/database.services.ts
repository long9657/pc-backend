import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb'
import { config } from 'dotenv'
import User from '~/models/schemas/user.schemas'
config()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pc.bagchof.mongodb.net/?appName=PC`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class Database {
  private db: Db
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
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
      // await this.client.close()
    }
  }
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USER_COLLECTIONS as string)
  }
}

const database = new Database()
export default database
