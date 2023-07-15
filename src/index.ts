import { log } from 'console'
import express, { Application, Request, Response } from 'express'
import router from './responseRedirect'
const app: Application = express()
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world From Express TS')
})

app.use('/', router)
app.listen(3000, (): void => {
  log('Server is running at 3000')
})
