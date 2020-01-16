const Dev = require('../models/Dev');

module.exports = {
    async destroy(request, response) {
        // deleta o user selecionado
        const {github_username} = request.query;

        await Dev.deleteOne({
            github_username
        })

        return response.json(`User ${github_username} deletado com sucesso.`)
    }
}
