import { Router, Request, Response } from 'express'
import authRouter from './authUsers.route'
import jobpostroute from "./job.route"

const routes = Router()
routes.use('/auth', authRouter)

routes.use('/job', jobpostroute)

export default routes