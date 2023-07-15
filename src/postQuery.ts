import { Request,Response } from "express";
import router from "./post";

router.post('/post-query', (req:Request,res:Response)=>{
 const firstname = req.query.firstname
 const lastname = req.query.lastname
 res.send(firstname+' '+lastname)
})

export default router