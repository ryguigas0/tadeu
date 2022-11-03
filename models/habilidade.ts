interface Habilidade {
	nome: string;
	descr: string;
}

class Habilidade {
	private static readonly habilidades: Habilidade[] = [
		{ nome: "Light my fire", descr: "+1 para testes com revólver" },
		{ nome: "LETS DANCE", descr: "2 tiros por ação com - 1 nos testes." },
		{ nome: "FORTUNATE SON", descr: "ao chegar a ZERO retorne com 3 PVs." },
		{
			nome: "DONT STOP BELIEVING",
			descr: "+ 1 para testes com rifles ou arcos longos.",
		},
		{ nome: "IMMIGRANT SONG", descr: "+ 1 ponto de Antecedente." },
		{
			nome: "GIMME SHELTER",
			descr: "dano extra para ataques surpresa com facas.",
		},
		{
			nome: "ANOTHER ONE BITES THE DUST",
			descr: "manobras de combate corpo a corpo.",
		},
		{
			nome: "RIDERS ON THE STORM",
			descr: "+ 1d6 no dano para cada 3 PVs perdidos.",
		},
		{
			nome: "BORN TO BE WILD",
			descr: "+ 1 para testes de furtividade ou percepção.",
		},
		{
			nome: "SMOKE ON THE WATER",
			descr: "+ 1 em testes com armas rústicas + 1 dano / Físico.",
		},
		{ nome: "UNDER PRESSURE", descr: "+ 1 para testes de Atributo." },
		{ nome: "HEARTBREAKER", descr: "- 1 para ações contra 1 alvo à escolha." },
		{ nome: "BARRACUDA", descr: "+ 1 em testes para obter informações." },
		{
			nome: "SWEET EMOTION",
			descr: "inspirações e bônus para outros personagens.",
		},
		{ nome: "CRAZY TRAIN", descr: "+ 1d6 no dano da arma até o fim do combate." },
		{
			nome: "CARRY ON MY WAYWARD SON",
			descr: "personagem pode refazer um teste falho.",
		},
		{ nome: "WAR PIGS", descr: "+ 1 para testes que envolvem explosivos." },
		{ nome: "ACE OF SPADES", descr: "+ 1 para testes em jogos e trapaças." },
		{ nome: "A HORSE WITH NO NAME", descr: "+ 1 para testes com montaria." },
		{
			nome: "I WANT TO HOLD YOUR HAND",
			descr: "+ 1d6 PVs curados durante o descanso.",
		},
		{ nome: "PARANOID", descr: "+ 1 nos testes de Iniciativa." },
		{
			nome: "RAMBLE ON",
			descr: "2 movimentos com 1 ação / +1 em testes de fuga.",
		},
		{ nome: "AQUALUNG", descr: "+ 1 para testes atléticos." },
		{
			nome: "MORE THAN A FEELING",
			descr: "a personagem pode fazer 2 perguntas à Juíza.",
		},
	];

	public static getHabilidade(num: number): Habilidade {
		return Habilidade.habilidades[num];
	}
}

export default Habilidade;
