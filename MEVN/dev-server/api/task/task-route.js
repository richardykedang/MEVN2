import express from 'express';
const router = express.Router();

router.get('/task', (req, res) => {
    res.send('get all')
});
router.get('/task/:id', (req, res) => {
    res.send('get id')
});
router.put('/task/:id', (req, res) => {
    res.send('update')
});
router.delete('task/:id', (req, res) => {
    res.send('delete')
});

export default router;