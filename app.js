import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// apps
var app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//static file serving
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));


//routers
import indexRouter from './routes/index.js';
import coursesRouter from './routes/courses.js';
import housesRouter from './routes/houses.js';

// mount routers
app.use('/', indexRouter);
app.use('/courses', coursesRouter);
app.use('/houses', housesRouter);

export default app;

