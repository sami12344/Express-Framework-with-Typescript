import express, { Request, Response } from 'express'
import router from './statusCode'

// Route that returns a JSON response
router.get('/json', (req: Request, res: Response) => {
  const jsonData = {
    message: 'This is a JSON response!',
    data: {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
    },
  }

  res.json(jsonData)
})

export default router
