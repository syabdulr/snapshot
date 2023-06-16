import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// now ready to connect server app to real db -> cloud atlas of mongodb

const CONNECTION_URL = 'mongodb+srv://abdulsyed:abdulsyed123@cluster0.y0bbics.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8082;

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

