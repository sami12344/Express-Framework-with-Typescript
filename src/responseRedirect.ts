import express, { Request, Response } from 'express'
import router from './responseDownload'

// Route that returns a JSON response
router.get('/bangladesh', (req: Request, res: Response) => {
 res.redirect('http://localhost:3000/india')
})
router.get('/india', (req: Request, res: Response) => {
 res.send("This is india")
})

export default router
