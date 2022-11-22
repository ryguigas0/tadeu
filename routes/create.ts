import app = require("teem");
import Personagem from "../models/personagem";
import ItemCavalo from "../models/itemCavalo";
import Cavalo from "../models/cavalo";
import ItemPersonagem from "../models/itemPersonagem";
import Habilidade from "../models/habilidade";

const nomeProjeto = "Tadeu";

function parseArray(x: any): any[] {
	if (!x) return [];
	if (Array.isArray(x)) return x;
	return [x];
}

class CharactersRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("characters/create", {
			titulo: nomeProjeto,
		});
	}

	@app.http.post()
	@app.route.formData()
	public async criarPersonagem(req: app.Request, res: app.Response) {
		let characterImage: app.UploadedFile = null;
		if (req.uploadedFilesArray && req.uploadedFilesArray.length) {
			characterImage = req.uploadedFilesArray[0];
		}

		let reqBody = req.body;

		reqBody["item-cavalo"] = parseArray(reqBody["item-cavalo"]);
		let itensCavalo: ItemCavalo[] = reqBody["item-cavalo"].map((v, i, arr) => {
			return {
				nome: v,
			};
		});

		let cavalo: Cavalo = {
			nome: reqBody["character-cavalo-name"],
			atributos: {
				fidelidade: reqBody["character-cavalo-fidelidade"],
				potencia: reqBody["character-cavalo-potencia"],
				vigor: reqBody["character-cavalo-vigor"],
			},
			dano: 9,
			def: 5,
			pv: 3,
			itens: itensCavalo,
		};

		reqBody["item"] = parseArray(reqBody["item"]);
		let equipamentos: ItemPersonagem[] = reqBody["item"].map((v, i, arr) => {
			let item: ItemPersonagem = {
				nome: v,
				dano: reqBody["item-dmg"][i],
			};

			return item;
		});

		reqBody["character-habilidades"] = parseArray(
			reqBody["character-habilidades"]
		);
		let habilidades: Habilidade[] = reqBody["character-habilidades"].map(
			(v, i, arr) => {
				return Habilidade.getHabilidade(Number.parseInt(v));
			}
		);

		let personagem: Personagem = {
			pv: reqBody["character-pv"],
			nome: reqBody["character-name"],
			def: reqBody["character-def"],
			iniciativa: reqBody["character-ini"],
			acoes: reqBody["character-actions"],
			atributos: {
				agilidade: reqBody["character-agilidade"],
				fisico: reqBody["character-fisico"],
				coragem: reqBody["character-coragem"],
				inteligencia: reqBody["character-inteligencia"],
			},
			antecedentes: {
				combate: reqBody["character-combate"],
				exploracao: reqBody["character-exploracao"],
				negocios: reqBody["character-negocios"],
				labuta: reqBody["character-labuta"],
				medicina: reqBody["character-medicina"],
				montaria: reqBody["character-montaria"],
				roubo: reqBody["character-roubo"],
				tradicao: reqBody["character-tradicao"],
			},
			recompensa: reqBody["recompensa"],
			dinheiro: reqBody["character-dinheiro"],
			equipamentos: equipamentos,
			cavalo: cavalo,
			icon: characterImage !== null,
			nivel: reqBody["character-level"],
			exp: reqBody["character-exp"],
			tormento: {
				main: reqBody["character-tormento"],
				sub: reqBody["character-subtormento"],
			},
			antecedentesPontos: 0,
			habilidades: habilidades,
			id: 0,
		};

		const newCharacterId = await Personagem.insertPersonagem(
			personagem,
			characterImage
		);

		res.status(201).send({ newCharacterId: newCharacterId });
	}
}

export = CharactersRoute;
