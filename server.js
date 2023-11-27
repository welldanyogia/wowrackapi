import express from 'express';
const app = express();
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './db.js';
import cors from 'cors';
dotenv.config();

import userRoutes from './routes/userRoutes.js';
import articleRoutes from "./routes/articleRoutes.js";
import hotspotRoutes from "./routes/hotspotRoutes.js";

connectDb();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.use('/hotspot', hotspotRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
