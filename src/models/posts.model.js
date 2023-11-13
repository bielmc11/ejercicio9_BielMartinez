const selectAll = () =>{
    return db.query('select p.id, p.titulo, p.descripcion, p.fecha, p.categoria, p.autores_id, a.nombre as nombre_autor, a.email as email_autor, a.imagen as imagen_autor from posts p, autores a where p.autores_id = a.id ')
}

const selectPostById = (id) =>{
    return db.query('select * from posts where id = ?', [id])
}

const selectPostByAutor = (autorId) =>{
    return db.query('select p.id, p.titulo, p.descripcion, p.fecha, p.categoria, p.autores_id, a.nombre as nombre_autor, a.email as email_autor, a.imagen as imagen_autor from posts p, autores a where p.autores_id = a.id AND p.autores_id = ?', [autorId] )
}

const insertPost = ({titulo, descripcion, categoria, autores_id}) =>{
    return db.query('insert into posts (titulo, descripcion, categoria, autores_id) values (?,?,?,?)', [titulo, descripcion, categoria, autores_id])
}

module.exports = {
    selectAll,
    insertPost,
    selectPostById,
    selectPostByAutor
}





