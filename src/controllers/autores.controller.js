const autoresModel = require('../models/autores.model')

const getAll = async (req,res) =>{
    try{
        const [result] = await autoresModel.selectAll();
        res.json(result);
    }catch(error){
        res.json({Error: error.message})
    }
}

const createAutor = async (req,res) =>{
    try{
        const [result] = await autoresModel.insertAutor(req.body);
        console.log(req.body)
        const [newAutor] = await autoresModel.selectById(result.insertId);
        res.json(newAutor[0])
    } catch (error){
        res.json({Error: error.message})
    
    }
}

module.exports = {
    getAll,
    createAutor
}