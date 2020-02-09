import express from  'express';
import morgan from 'morgan'
const app = express();

import taskRouter from './router/tasks.js'

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api',taskRouter);


export default app;