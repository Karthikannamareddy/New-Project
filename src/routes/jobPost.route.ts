import jobpost from "../db/models/jobPost"
import { Router, Request, Response } from 'express'
import Users from '../db/models/users'

const jobpostroute = Router()

jobpostroute.post("/",async (req, res) => {
   try {
    const data = req.body

    const createData = await jobpost.create(data)

   res.send({message : "successfully done ", data : createData})

   } catch (error) {
   res.send(error)
    
   }
})

jobpostroute.get("/",async (req:Request,res:Response) => {
    const response  = await Users.findAll()

    res.send(response)
} )

export default jobpostroute