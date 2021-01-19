import express from 'express';
const router = express.Router();
import * as controller from './task-controller';

router.post('/task', controller.create);
router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.put('/task', controller.update);
router.delete('/task/:id', controller.remove);

export default router;