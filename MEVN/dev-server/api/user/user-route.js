import express from 'express';
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('get all user')
});

export default router;