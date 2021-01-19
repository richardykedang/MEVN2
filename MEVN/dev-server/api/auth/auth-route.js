import express from 'express';
const router = express.Router();

router.post('/auth', (req, res) => {
    res.send('auth login')
});

export default router;