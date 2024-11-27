import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000; 

//Get directory name
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//logger middleware
app.use(logger);

//Setup static folder
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/api/posts', posts);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404,
    next(error);
});


//Error Handler
app.use(errorHandler);
app.use(notFound);


app.listen(port, () => console.log(`Server running on port ${port}`));




