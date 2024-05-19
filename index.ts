import express from 'express';
import diaryRouter from './routes/diaries';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged hereeeeee');
  res.send('pong');
});

app.use('/api/', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});