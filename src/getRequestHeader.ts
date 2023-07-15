import { Request, Response } from "express";
import router from "./urlQuery";


router.get('/get-header', (req:Request,res:Response)=>{
 const firstname = req.header('firstname')
 const lastName = req.header('lastname')
 res.end(firstname+' '+lastName)

})

export default router