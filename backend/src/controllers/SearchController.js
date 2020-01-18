const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')


// Essa busca é funcional no insomnia quando especificado as tecnologias.

// module.exports = {
//     async index(request, response) {
//         // Buscar todos os devs num raio de 10km
//         // Filtrar por tecnologia
//         const { latitude, longitude, techs } = request.query;
//         const techsArray = parseStringAsArray(techs);

//         const devs = await Dev.find({
//             techs:{
//                 $in: techsArray,
//             },
//             location:{
//                 $near : {
//                     $geometry: {
//                         type:'Point',
//                         coordinates: [longitude, latitude],
//                     },
//                     $maxDistance: 10000,
//                 },
//             },

//         })
//         return response.json({devs})
//     }
// }

// Desafio pessoal com search no frontend, reunir todos os resultados que contenham o texto pesquisado (sem repetir os devs)

module.exports = {
    async index(request, response) {
        // atualmente ele só vai buscar o dev pelo username e só vai encontrar caso dê match em lowercase e uppercase.
        // pode ser resolvido ao cadastrar, transformar todo username para lowercase, assim como quando buscar.
        // Caso haja melhoria no sistema de busca do frontend, talvez colocar um switch case com o field que o
        // usuário está fazendo a busca (/web/src/components/DevSearch.js)
        const {github_username} = request.query
        const dev = await Dev.findOne({
            github_username,
        })
        console.log(dev)
        return response.json(dev)
        
    }
}