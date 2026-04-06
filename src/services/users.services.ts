import User from '~/models/schemas/user.schemas'
import database from './database.services'

class UserServices {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload

    const result = await database.users.insertOne(new User({ email, password }))
    return result
  }
}
const userServices = new UserServices()
export default userServices
