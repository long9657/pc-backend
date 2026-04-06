import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/user.middlewares'
const userRouter = Router()

// define the home page route
userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerController)

export default userRouter
