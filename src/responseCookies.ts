import router from './responseHeader'
import { Response, Request } from 'express'

router.get('/header', (req: Request, res: Response) => {
  res.cookie('name', 'Sami Islam')
  res.cookie('age', '18')
  res.cookie('city', 'dhaka')
  res.status(201).end('Hello world, Header is set')
})

export default router
