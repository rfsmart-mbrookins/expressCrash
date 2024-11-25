const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000; 

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res)=> {
//     // res.send('<h1>Hello World!<h1>'); 
//     // res.send({message: 'Hello World!'}); 
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res)=> {
//     // res.send('About'); 
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
    {id:1, title: 'post1'},
    {id:2, title: 'post2'},
    {id:3, title: 'post3'}
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

