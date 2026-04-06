import { Router } from 'express'
import { loginController } from '~/controllers/login.controllers'
import { loginValidator } from '~/middlewares/user.middlewares'
const userRouter = Router()

// define the home page route
userRouter.post('/login', loginValidator, loginController)
export default userRouter
