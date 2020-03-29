const generateUniqueID = require('../utils/generateUniqueID');
const connection = require('../database/connection');

module.exports = {
    async index(request, response)  {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueID(); //Gera 4 bytes de caracteres aleatório e converte em uma string do tipo hexadecimal.    
//o node vai aguardar executar esse código ao chegar
//nessa parte de await connection, para só assim
//seguir com o retorno de response.
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    return response.json({ id });
    }
};