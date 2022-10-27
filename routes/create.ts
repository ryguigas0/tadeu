import { Debugger } from "inspector";
import app = require("teem");
import { Personagem, ItemPersonagem, Cavalo, ItemCavalo } from "../sql/fakeDB";
import db from "../sql/fakeDB"

const nomeProjeto = "Tadeu"
class CharactersRoute {
    public async index(req: app.Request, res: app.Response) {

        res.render("characters/create", {
            titulo: nomeProjeto
        })

    }

    @app.http.post()
    public async criarPersonagem(req: app.Request, res: app.Response) {
        let reqBody = req.body

        let itensCavalo: ItemCavalo[] = new Array(15).fill(1).map((v, i, arr) => {
            let itemCavalo: ItemCavalo = {
                nome: reqBody[`item-cavalo-${i}`]
            };



            return itemCavalo
        })

        let cavalo: Cavalo = {
            nome: reqBody["character-cavalo-name"],
            atributos: {
                fidelidade: reqBody["character-cavalo-fidelidade"],
                potencia: reqBody["character-cavalo-potencia"],
                vigor: reqBody["character-cavalo-vigor"]
            },
            dano: 9,
            def: 5,
            pv: 3,
            itens: itensCavalo
        }

        let equipamentos: ItemPersonagem[] = new Array(10).fill(1).map((v, i, arr) => {
            let item: ItemPersonagem = {
                nome: reqBody[`item-${i}`],
                dano: reqBody[`item-dmg-${i}`]
            }
            return item
        })

        let personagem: Personagem = {
            pv: reqBody["character-pv"],
            name: reqBody["character-name"],
            def: reqBody["character-def"],
            iniciativa: reqBody["character-ini"],
            acoes: reqBody["character-actions"],
            atributos: {
                agilidade: reqBody["character-agilidade"],
                fisico: reqBody["character-fisico"],
                coragem: reqBody["character-coragem"],
                inteligencia: reqBody["character-inteligencia"]
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
            icon: "",
            level: reqBody["character-level"],
            exp: reqBody["character-exp"],
            tormento: {
                main: "",
                sub: ""
            },
            antecedentesPontos: 0,
            habilidades: []
        }

        const newCharacterId = db.insertPersonagem(personagem)

        res.redirect(`../../characters/${newCharacterId} `)
    }
}

export = CharactersRoute;
