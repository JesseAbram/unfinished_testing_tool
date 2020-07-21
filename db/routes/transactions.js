import { Router } from 'express';
import * as controller  from '../controllers/transactions.controllers.js';


const router = Router();

router.get('/', controller.getTransactions)
// router.post('add', controller.addTransaction)

export default router