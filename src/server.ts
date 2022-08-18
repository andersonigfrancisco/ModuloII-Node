import express from 'express';

import { createCourse } from './router';

const app = express();

app.use(express.json())

app.get('/',createCourse)

app.listen(3001,() => console.log("server is running!"));