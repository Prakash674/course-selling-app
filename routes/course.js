import { Router } from 'express';

const courseRouter = Router();

//get courses
courseRouter.post('/course/purchase', (req, res) => {
  res.json({ message: 'signup endpoint' });
});

//get courses
courseRouter.post('/courses/preview', (req, res) => {
  res.json({ message: 'signup endpoint' });
});

export { courseRouter };
