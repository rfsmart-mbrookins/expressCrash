import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';


const port = process.env.PORT || 8000; 
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//logger middleware
app.use(logger);

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


//1:20 https://www.youtube.com/watch?v=CnH3kAXSrmU


