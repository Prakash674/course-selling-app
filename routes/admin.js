import { Router } from 'express';

const adminRouter = Router();

//signup
userRouter.post('/signup', (req, res) => {
  res.json({ message: 'signup endpoint' });
});

//signin
userRouter.post('/signin', (req, res) => {
  res.json({ message: 'signup endpoint' });
});

//get courses
userRouter.get('/purchases', (req, res) => {
  res.json({ message: 'signup endpoint' });
});
