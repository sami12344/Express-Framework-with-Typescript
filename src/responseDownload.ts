import express, { Request, Response } from 'express'
import router from './jsonResponse'

// Route that returns a JSON response
router.get('/download', (req: Request, res: Response) => {
  // Send the index.ts file as a response
  res.sendFile('index.ts', { root: __dirname });
});


export default router
