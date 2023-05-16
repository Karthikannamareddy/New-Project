import jobpost from "../db/models/jobs"
import { Router, Request, Response } from 'express'
import Users from '../db/models/users'

const jobsRouter = Router()

jobsRouter.post("/",async (req:Request, res:Response) => {
   try {
    const data = req.body

    const createData = await jobpost.create(data)

   res.send({message : "successfully done ", data : createData})

   } catch (error) {
   res.send(error)
    
   }
})

jobsRouter.get("/",async (req:Request,res:Response) => {
    const response  = await jobpost.findAll()
    
    res.send(response)
} )

export default jobsRouter