import app = require("teem");
import Personagem from "../models/personagem";

const nomeProjeto = "Tadeu";
class CharactersRoute {
	@app.route.methodName(":id?")
	public async index(req: app.Request, res: app.Response) {
		const characterId = req.params["id"];

		if (!characterId) {
			const personagens = await Personagem.getPersonagens();
			res.render("characters/index", {
				titulo: nomeProjeto,
				personagens: personagens,
			});
		} else {
			const personagem = await Personagem.getPersonagem(
				Number.parseInt(characterId)
			);

			res.render("characters/character", {
				titulo: nomeProjeto,
				personagem: personagem,
			});
		}
	}
}

export = CharactersRoute;
