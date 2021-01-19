import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('register route')
});

export default router;