import express, { Request, Response } from 'express'
const router = express.Router()

// Route that returns 200 OK
router.get('/ok', (req: Request, res: Response) => {
  res.status(200).send('OK')
})

// Route that returns 201 Created
router.post('/created', (req: Request, res: Response) => {
  res.status(201).send('Created')
})

// Route that returns 204 No Content
router.delete('/no-content', (req: Request, res: Response) => {
  res.status(204).send()
})

// Route that returns 400 Bad Request
router.get('/bad-request', (req: Request, res: Response) => {
  res.status(400).send('Bad Request')
})

// Route that returns 401 Unauthorized
router.get('/unauthorized', (req: Request, res: Response) => {
  res.status(401).send('Unauthorized')
})

// Route that returns 403 Forbidden
router.get('/forbidden', (req: Request, res: Response) => {
  res.status(403).send('Forbidden')
})

// Route that returns 404 Not Found
router.get('/not-found', (req: Request, res: Response) => {
  res.status(404).send('Not Found')
})

// Route that returns 500 Internal Server Error
router.get('/internal-error', (req: Request, res: Response) => {
  res.status(500).send('Internal Server Error')
})

export default router
