import { express } from 'express';
import { userRouter } from './routes/user';
import { courseRouter } from './routes/course';
const port = 3000;
const app = express();


app.use('/api/v1/user', userRouter);

app.use('/api/v1/course', courseRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
