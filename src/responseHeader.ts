import router from "./responseRedirect";
import { Response, Request } from "express";


router.get('/cookies',(req:Request,res:Response)=>{
 res.append('name', 'Sami Islam')
 res.append('age', '18')
 res.append('city', 'dhaka')
 res.status(201).end('Hello world, cookies is set success')
})

export default router