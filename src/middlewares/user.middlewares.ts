import { NextFunction, Response, Request } from 'express'
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'loi 404'
    })
  }
  next()
}
