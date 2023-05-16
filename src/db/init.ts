import { createAdminUser } from "./script";
import User from "./models/users";
import jobPost from "./models/jobs"

const isDev = true
const dbInit = async() => {
    await User.sync({alter:isDev});
    await jobPost.sync({alter:isDev});
    
}

export default dbInit