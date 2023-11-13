const postsModel = require('../models/posts.model');

const getAll = async (req,res) =>{
    try{
        const [result] = await postsModel.selectAll();
        res.json(result)

    } catch(error){
        res.json({Error: error.message})
    }
}

const getPostByAutor = async (req,res) =>{
    try{
        const { autorId } = req.params
        const [result] = await postsModel.selectPostByAutor(parseInt(autorId))
        res.json(result)

    }catch(error){
        res.json({Error: error.message})
    }
} 

const createPost = async (req, res) =>{
    try{
        const [post] = await postsModel.insertPost(req.body);
        const [result] = await postsModel.selectPostById(post.insertId);
        res.json(result);
    } catch(error){
        res.json({Error: error.message})
    }
}

module.exports = {
    getAll,
    createPost,
    getPostByAutor
}