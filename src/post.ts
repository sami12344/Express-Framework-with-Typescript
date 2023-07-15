import { Response,Request } from "express";
import router from "./clearCookie";

router.post('/post', (req:Request,res:Response)=>{
 res.send("This is simple post request")
})

export default router