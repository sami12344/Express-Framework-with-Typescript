import router from './clearCookie'
import { Response, Request } from 'express'

router.get('/query', (req: Request, res: Response) => {
const firstname = req.query.firstname;
const lastname = req.query.lastname;
res.end(`${firstname} ${lastname}`)
})

export default router
