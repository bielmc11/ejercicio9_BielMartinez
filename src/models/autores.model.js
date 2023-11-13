//GET
const selectAll = () =>{
    return db.query('select * from autores');
}

const selectById = (id) =>{
    return db.query('select * from autores where id = ?', [id])
} 


//POST
const insertAutor = ({nombre, email, imagen}) =>{
    return db.query('insert into autores (nombre, email, imagen) values (?,?,?)',[nombre, email, imagen])
}


module.exports = {
    selectAll,
    insertAutor,
    selectById
}