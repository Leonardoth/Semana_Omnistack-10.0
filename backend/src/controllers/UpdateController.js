const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async update(request, response) {
        // user: balbuquerque
        // change, bio, blablabla
        // params : add, remove, change
        const { github_username, field, value } = request.query;
        const devs = await Dev.findOne({
            github_username
        })
        // Quando houver a comunicação com o frontend, será possível popular as áreas do perfil na hora de editar, então acho que nós não precisamos nos aprofundar muito
        // Eu pensei em algo como vários input box que serão populadas em uma tela de 'editar perfil' por exemplo. O que o usuário mudar, será setado pelo devs.set(field, value)
        // Isso servirá para location e techs também, então por enquanto, afim de testes, podemos usar o insomnia diretamente com o field e value.
        switch(field){
            case 'techs':{
                const techsArray = parseStringAsArray(value)
                devs.set(field, techsArray)
                devs.save()
                break;
            }
            case 'location':{
                const { latitude, longitude } = request.query;
                devs.location.coordinates = [Number.parseFloat(longitude), Number.parseFloat(latitude)]
                console.log(devs)
                devs.save()
                break;
            }
            default:{
                devs.set(field, value)
                devs.save()
                break;
            }
        }
        return response.json({devs})
    }
}
