import User from '~/models/schemas/user.schemas'
import database from './database.services'
import { RegisterReqBody } from '~/models/requests/user.requests'
import { signToken } from '~/utils/jwt'
import { TokenType } from '~/constants/enums'
import { hashPassword } from '~/utils/crypto'
class UserServices {
  private signAccessToken(user_id: string) {
    return signToken({ payload: { user_id, token_type: TokenType.AccessToken } })
  }

  private signRefreshToken(user_id: string) {
    return signToken({ payload: { user_id, token_type: TokenType.RefreshToken } })
  }

  async register(payload: RegisterReqBody) {
    const result = await database.users.insertOne(
      new User({ ...payload, date_of_birth: new Date(payload.date_of_birth), password: hashPassword(payload.password) })
    )
    return result
  }

  async checkEmailExist(email: string) {
    const user = await database.users.findOne({ email })
    console.log(user)
    return Boolean(user)
  }
}
const userServices = new UserServices()
export default userServices
