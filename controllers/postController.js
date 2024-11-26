
let posts = [
    {id:1, title: 'post1'},
    {id:2, title: 'post2'},
    {id:3, title: 'post3'}
];

//Get all posts - GET /api/posts
export const getPosts = (req, res, next) => {
    // console.log(req.query);
    const limit = parseInt(req.query.limit);

if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
} 
res.status(200).json(posts);
}

//Get single post - GET /api/posts/:id
export const getPost =  (req, res, next) => {
    const id = parseInt(req.params.id);
    // res.status(200).json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);

if(!post) {
    // return res.status(404).json({msg: `A post with the id of ${id} was not found`});
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
}
    res.status(200).json(post);
}

//Create POST - POST /api/posts
export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    };    

    posts.push(newPost);
    res.status(201).json(posts);
}

//Update post - PUT /api/posts/:id
export const updatePost =  (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id===id);

    if(!post) {
        // return res.status(404).json({msg: `A post with the id of ${id} was not found`});
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    };

post.title = req.body.title;
res.status(200).json(posts);
}

//Delete post - DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id===id);

    if(!post) {
        // return res.status(404).json({msg: `A post with the id of ${id} was not found`});
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    };

posts = posts.filter((post)=> post.id !== id);
res.status(200).json(posts);
}