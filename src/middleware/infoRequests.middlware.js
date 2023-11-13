const fs = require('node:fs/promises');
const dayjs = require('dayjs');

const infoRequest = async (req, res, next) =>{
    try{
        const info = `\n ${dayjs().format('DD-MM-YYYY HH:mm:ss')} Metodo: ${req.method}, URL: ${req.originalUrl}`
        await fs.appendFile('./src/util/request.log', info);
        next();

    } catch(error){
        res.json( { Error: error.message } )
    }
}

module.exports = {
    infoRequest
}