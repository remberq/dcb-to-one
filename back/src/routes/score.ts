import { getScore } from '../controllers/score'
import { Router } from 'express'

const router: Router = Router()

router.get('/api/score/get-score/:gameId', getScore)

export default router
