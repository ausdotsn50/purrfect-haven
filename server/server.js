import express from 'express';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import petsRoutes from './routes/pets.js';
import rescueRoutes from './routes/rescue.js';
import communityRoutes from './routes/community.js';
import adoptionsRoutes from './routes/adoptions.js';
import storiesRoutes from './routes/stories.js';
import welfareChecksRoutes from './routes/welfareChecks.js';
import path from 'path';
import { fileURLToPath } from 'url';
import triviaRoutes from './routes/triviaRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// comma-separated list, e.g. CLIENT_ORIGIN=https://purrfect-haven.vercel.app,http://localhost:5173
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(origin => origin.trim());

app.use(cors({
  origin: 'https://purrfect-haven-tawny.vercel.app',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

// auth endpoint
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/pets',  petsRoutes);
app.use('/api/rescue',  rescueRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/adoptions', adoptionsRoutes);
app.use('/api/stories', storiesRoutes);
app.use('/api/welfare-checks', welfareChecksRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/trivia', triviaRoutes);

// health endpoint
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'error', db: 'disconnected' });
  }
});

// port listen
app.listen(PORT, () => {
  console.log(`Purrfect Haven server running on http://localhost:${PORT}`);
});