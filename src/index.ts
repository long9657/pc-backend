import express from 'express'
import userRouter from './routes/user.routes'
import database from './services/database.services'
const app = express()

app.use(express.json())

app.use('/user', userRouter)

app.listen(3000, () => {
  console.log('dang nghe')
})

database.connect().catch(console.dir)
