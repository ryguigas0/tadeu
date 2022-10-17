import app = require("teem");
import db from "../sql/fakeDB";

const nomeProjeto = "Tadeu"
class CharactersRoute {
    public async index(req: app.Request, res: app.Response) {

        res.render("characters/create", {
            titulo: nomeProjeto
        })

    }
}

export = CharactersRoute;
