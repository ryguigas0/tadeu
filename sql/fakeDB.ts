type Personagem = {
    id?: number;
    name: string;
    icon: string;
    level: number;
    exp: number;
    tormento: {
        main: string;
        sub: string;
    };
    atributos: {
        fisico: number,
        agilidade: number,
        inteligencia: number,
        coragem: number
    },
    pv: number,
    def: number,
    iniciativa: number,
    acoes: number,
    antecedentesPontos: number,
    antecedentes: {
        combate: number,
        labuta: number,
        negocios: number,
        montaria: number,
        tradicao: number,
        exploracao: number,
        roubo: number,
        medicina: number,
    },
    habilidades: Habilidade[],
    recompensa: number,
    dinheiro: number,
    equipamentos: ItemPersonagem[],
    cavalo?: Cavalo
}

type Habilidade = {
    ativa: boolean,
    nome: string,
    descricao: string
}

type ItemPersonagem = {
    nome: string,
    dano: string
}

type Cavalo = {
    nome: string,
    pv: number,
    dano: number,
    def: number,
    atributos: {
        fidelidade: number,
        potencia: number,
        vigor: number
    },
    itens: ItemCavalo[]
}

type ItemCavalo = {
    nome: string
}

let listaPersonagens: Personagem[] = new Array(5).fill(1).map((v, i, arr) => {
    let personagem: Personagem = {
        id: i,
        name: "Cleide Belinha",
        icon: "cleide_belinha.jpeg",
        level: 1,
        exp: 5,
        tormento: {
            main: "Vício em",
            sub: "Adrenalina"
        },
        atributos: {
            fisico: 1,
            agilidade: 1,
            inteligencia: 1,
            coragem: 1
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
                ativa: true,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: true,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
            {
                ativa: false,
                nome: "Carry on my wayward son",
                descricao: "Inspirações e bônus para outros personagens"
            },
        ],
        recompensa: 0,
        dinheiro: 150,
        equipamentos: [
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            },
            {
                nome: "Rifle de precisão",
                dano: "2d6+3 para acertar de perto"
            }
        ],
        cavalo: {
            nome: "Não Binare",
            pv: 20,
            dano: 6,
            def: 5,
            atributos: {
                fidelidade: 1,
                potencia: 1,
                vigor: 1
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
                }
            ]
        }

    }

    return personagem
})


export { Personagem, Habilidade, ItemPersonagem, Cavalo, ItemCavalo };

export default {

    personagens: listaPersonagens,

    currId: listaPersonagens.length - 1,

    getPersonagens(): Personagem[] {
        return this.personagens
    },

    getPersonagem(id: number): Personagem {
        return this.personagens[id]
    },

    insertPersonagem(personagem: Personagem): number {
        this.currId++

        personagem.id = this.currId;

        this.personagens.push(personagem)

        return this.currId
    },

    updatePersonagem(id: number, dados: Personagem): void {
        this.personagens[id] = dados;
    }
}

