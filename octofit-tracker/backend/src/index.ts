import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

app.get('/', (_req, res) => res.send('OctoFit Tracker backend'));

mongoose
  .connect('mongodb://localhost:27017/octofit')
  .then(() => console.log('MongoDB connected on mongodb://localhost:27017 (db: octofit)'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
