import { Router } from 'express';
import * as controller  from '../controllers/transactions.controllers.js';


const router = Router();

router.get('/', controller.getTransactions)
router.post('add', controller.addTransaction)
router.get('/fire', controller.fireTransactions)

export default router