import app = require("teem");
import db from "../sql/fakeDB";

const nomeProjeto = "Tadeu"
class CharactersRoute {
    @app.route.methodName(":id?")
    public async index(req: app.Request, res: app.Response) {
        const characterId = req.params["id"]

        if (!characterId) {
            res.render("characters/index", {
                titulo: nomeProjeto, personagens: db.getPersonagens()
            })
        } else {

            const personagem = db.getPersonagens()[characterId]

            res.render("characters/character", {
                titulo: nomeProjeto, personagem: personagem
            })
        }

    }
}

export = CharactersRoute;
