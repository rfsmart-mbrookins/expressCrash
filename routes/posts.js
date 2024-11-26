// const express = require('express');
import express from 'express';
const router = express.Router();


let posts = [
    {id:1, title: 'post1'},
    {id:2, title: 'post2'},
    {id:3, title: 'post3'}
];

//moved to routes from server.js
//Get all posts
router.get('/', (req, res) => {
    // console.log(req.query);
    const limit = parseInt(req.query.limit);

if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
} 
res.status(200).json(posts);
});

//Get a single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.status(200).json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);

if(!post) {
    return res
    .status(404)
    .json({msg: `A post with the id of ${id} was not found`});
}
    res.status(200).json(post);
});

//Create new post
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        return res.status(400).json({msg: 'Please include a title'});
    };

    posts.push(newPost);
    res.status(201).json(posts);
});

//Update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id===id);

    if(!post) {
        return res
        .status(404)
        .json({msg: `A post with the id of ${id} was not found`});
    };

post.title = req.body.title;
res.status(200).json(posts);
});

//Delete Post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id===id);

    if(!post) {
        return res
        .status(404)
        .json({msg: `A post with the id of ${id} was not found`});
    };

posts = posts.filter((post)=> post.id !== id);
res.status(200).json(posts);
});

export default router;
