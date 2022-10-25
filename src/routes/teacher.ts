import { Router } from 'express'
import addTeacher from '../controllers/teacher/addTeacher'
import getAllTeacher from '../controllers/teacher/getAllTeacher'

const router = Router()

router.get('/findAll', getAllTeacher)
router.post('/addTeacher', addTeacher)

export default router