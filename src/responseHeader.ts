import router from "./responseRedirect";
import { Response, Request } from "express";


router.get('/header',(req:Request,res:Response)=>{
 res.append('name', 'Sami Islam')
 res.append('age', '18')
 res.append('city', 'dhaka')
 res.status(201).end('Hello world, Header is set')
})

export default router