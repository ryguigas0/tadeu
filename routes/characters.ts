const nomeProjeto = "Tadeu"
const personagemTemplate = new Array(10).fill([
    {
        name: "McBruce Leeniel",
        level: 1,
        hp: 50,
        def: 5
    },
])
import app = require("teem");

class CharactersRoute {
    public async characters(req: app.Request, res: app.Response) {
        res.render("characters/characters", {
            titulo: nomeProjeto, personagens: personagemTemplate
        })
    }
}

export = CharactersRoute;
