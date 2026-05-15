import { Request, Response } from 'express'
import User from '~/models/schemas/user.schemas'
import database from '~/services/database.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/user.requests'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  res.json(req.body)
}
export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  const { email, password } = req.body

  try {
    const result = await database.users.insertOne(new User({ email, password }))
    return res.json({
      message: 'Register Sucess',
      result
    })
  } catch (error) {
    res.status(400).json({ error: 'Email or password is required' })
    return
  }
}
