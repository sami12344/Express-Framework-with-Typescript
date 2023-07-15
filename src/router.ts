// app.ts
import express, { Request, Response } from 'express'
const app = express()

// Define a route for the home page
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the home page!')
})

// Define a route for the about page
app.get('/about', (req: Request, res: Response) => {
  res.send('This is the about page.')
})

// Define a route with a parameter
app.get('/user/:id', (req: Request, res: Response) => {
  const userId = req.params.id
  res.send(`You requested user with ID: ${userId}`)
})

// Define a catch-all route for all other paths
app.get('*', (req: Request, res: Response) => {
  res.send('404 Not Found')
})

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
