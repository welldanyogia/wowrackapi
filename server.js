import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './db.js';
import cors from 'cors';
import path from 'path';

// Modifikasi untuk mendukung __dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Akhir modifikasi

dotenv.config();

import userRoutes from './routes/userRoutes.js';
import articleRoutes from "./routes/articleRoutes.js";
import hotspotRoutes from "./routes/hotspotRoutes.js";

connectDb();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.use('/hotspot', hotspotRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
