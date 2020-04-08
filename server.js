import express from 'express';
import cors from 'cors';
import path from 'path';
import timesRoute from './routes/nytimes';
import guardianRoute from './routes/guardian';

const app = express();
const PORT = 4000;
const router = express.Router();

router.use('/nytimes', timesRoute());
router.use('/guardian', guardianRoute());

app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));
app.use('/newsapi/v1.0', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`));
