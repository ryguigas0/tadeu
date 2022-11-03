import ItemCavalo from "./itemCavalo";

export default interface Cavalo {
    nome: string;
    pv: number;
    dano: number;
    def: number;
    atributos: {
        fidelidade: number;
        potencia: number;
        vigor: number;
    };
    itens: ItemCavalo[];
}
