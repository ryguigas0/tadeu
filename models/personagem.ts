import Cavalo from "./cavalo";
import Habilidade from "./habilidade";
import ItemPersonagem from "./itemPersonagem";

interface Personagem {
    id: number;
    name: string;
    icon: string;
    level: number;
    exp: number;
    tormento: {
        main: string;
        sub: string;
    };
    atributos: {
        fisico: number;
        agilidade: number;
        inteligencia: number;
        coragem: number;
    };
    pv: number;
    def: number;
    iniciativa: number;
    acoes: number;
    antecedentesPontos: number;
    antecedentes: {
        combate: number;
        labuta: number;
        negocios: number;
        montaria: number;
        tradicao: number;
        exploracao: number;
        roubo: number;
        medicina: number;
    };
    habilidades: Habilidade[];
    recompensa: number;
    dinheiro: number;
    equipamentos: ItemPersonagem[];
    cavalo?: Cavalo;
}

class Personagem {

    private static readonly personagens: Personagem[] = (new Array(5) as Personagem[]).fill(null).map((v, i, arr) => {
        return {
            id: i,
            name: "Cleide Belinha",
            icon: "cleide_belinha.jpeg",
            level: 1,
            exp: 5,
            tormento: {
                main: "Vício em",
                sub: "Adrenalina",
            },
            atributos: {
                fisico: 1,
                agilidade: 1,
                inteligencia: 1,
                coragem: 1,
            },
            pv: 11,
            def: 5,
            iniciativa: 2,
            acoes: 2,
            antecedentesPontos: 5,
            antecedentes: {
                combate: 1,
                labuta: 1,
                negocios: 1,
                montaria: 1,
                tradicao: 1,
                exploracao: 1,
                roubo: 1,
                medicina: 1,
            },
            habilidades: [
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
                {
                    nome: "Carry on my wayward son",
                    descr: "Inspirações e bônus para outros personagens",
                },
            ],
            recompensa: 0,
            dinheiro: 150,
            equipamentos: [
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
                {
                    nome: "Rifle de precisão",
                    dano: "2d6+3 para acertar de perto",
                },
            ],
            cavalo: {
                nome: "Não Binare",
                pv: 20,
                dano: 6,
                def: 5,
                atributos: {
                    fidelidade: 1,
                    potencia: 1,
                    vigor: 1,
                },
                itens: [
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                    {
                        nome: "Rifle de precisão",
                    },
                ],
            },
        };
    });

    private static currId = Personagem.personagens.length - 1;

    public static getPersonagens(): Promise<Personagem[]> {
		return Promise.resolve(Personagem.personagens);
	}

	public static getPersonagem(id: number): Promise<Personagem> {
		return Promise.resolve(Personagem.personagens[id]);
	}

	public static insertPersonagem(personagem: Personagem): Promise<number> {
		Personagem.currId++;

		personagem.id = this.currId;

		Personagem.personagens.push(personagem);

		return Promise.resolve(this.currId);
	}

	public static updatePersonagem(dados: Personagem): Promise<void> {
		this.personagens[dados.id] = dados;

        return Promise.resolve();
	}
}

export default Personagem;
