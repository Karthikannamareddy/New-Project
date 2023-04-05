import { Router, Request, Response } from 'express'
import authRouter from './authUsers.route'
import jobpostroute from "./jobPost.route"

const routes = Router()
routes.use('/auth', authRouter)

routes.use('/jobpost', jobpostroute)

export default routes