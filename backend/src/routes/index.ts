import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Página de Login');
});

export default router;