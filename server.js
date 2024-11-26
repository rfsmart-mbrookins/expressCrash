// const express = require('express');
// const path = require('path');.
import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
// const posts = require('./routes/posts');
const port = process.env.PORT || 8000; 

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/posts', posts);


app.listen(port, () => console.log(`Server running on port ${port}`));


//56:13 - https://www.youtube.com/watch?v=CnH3kAXSrmU



