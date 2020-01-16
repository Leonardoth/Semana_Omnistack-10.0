const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async destroy(request, response) {
        // deleta o user selecionado
        const {github_username} = request.query;

        const devs = await Dev.deleteOne({
            github_username
        })
        return response.json('User deletado com sucesso.')
    }
}
