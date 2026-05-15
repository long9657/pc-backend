import User from '~/models/schemas/user.schemas'
import database from './database.services'
import { RegisterReqBody } from '~/models/requests/user.requests'
class UserServices {
  async register(payload: RegisterReqBody) {
    const result = await database.users.insertOne(
      new User({ ...payload, date_of_birth: new Date(payload.date_of_birth) })
    )
    return result
  }
}
const userServices = new UserServices()
export default userServices
