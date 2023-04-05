import { createAdminUser } from "./script";
import User from "./models/users";
import jobPost from "../db/models/jobPost"

const isDev = true
const dbInit = async() => {
    await User.sync({alter:isDev});
    await jobPost.sync({alter:isDev});
    
}

export default dbInit