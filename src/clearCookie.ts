import { Request, Response } from "express";
import router from "./responseCookies";

router.get('clearCookies',(req:Request,res:Response)=>{
 res.clearCookie('name')
 res.clearCookie('age')
 res.clearCookie('city')
 res.send('Cookies are cleared')
})

export default router