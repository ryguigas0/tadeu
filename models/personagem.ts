import app = require("teem");
import Cavalo from "./cavalo";
import Habilidade from "./habilidade";
import ItemPersonagem from "./itemPersonagem";

interface Personagem {
	id: number;
	nome: string;
	icon: boolean;
	nivel: number;
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
	public static async getPersonagens(): Promise<Personagem[]> {
		let resultadoQuery: unknown[];

		await app.sql.connect(async (sql) => {
			await sql.beginTransaction();

			resultadoQuery = await sql.query("select * from personagem");

			await sql.commit();
		});

		let lista: Personagem[] = resultadoQuery.map(this.converterPersonagem);

		return Promise.resolve(lista);
	}

	public static async getPersonagem(id: number): Promise<Personagem> {
		let personagem: Personagem;

		await app.sql.connect(async (sql) => {
			await sql.beginTransaction();

			let resultadoQuery = (
				await sql.query("select * from personagem where id = ?", [id])
			)[0];

			personagem = this.converterPersonagem(resultadoQuery);

			await sql.commit();
		});

		return Promise.resolve(personagem);
	}

	private static converterPersonagem(notPeronsagem): Personagem {
		let personagem: Personagem = {
			id: notPeronsagem.id,
			nome: notPeronsagem.nome,
			atributos: {
				agilidade: notPeronsagem.agilidade,
				coragem: notPeronsagem.coragem,
				fisico: notPeronsagem.fisico,
				inteligencia: notPeronsagem.inteligencia,
			},
			acoes: notPeronsagem.acoes,
			antecedentesPontos: notPeronsagem.antecedentes_pontos,
			antecedentes: JSON.parse(notPeronsagem.antecedentes_json),
			def: notPeronsagem.def,
			dinheiro: notPeronsagem.dinheiro,
			equipamentos: JSON.parse(notPeronsagem.equipamentos_json),
			exp: notPeronsagem.experiencia,
			habilidades: JSON.parse(notPeronsagem.habilidade_json),
			icon: notPeronsagem.icon == 1,
			iniciativa: notPeronsagem.iniciativa,
			nivel: notPeronsagem.nivel,
			pv: notPeronsagem.pv,
			recompensa: notPeronsagem.recompensa,
			tormento: {
				main: notPeronsagem.tormento,
				sub: notPeronsagem.subtormento,
			},
			cavalo: JSON.parse(notPeronsagem.cavalo_json),
		};

		return personagem;
	}

	public static async insertPersonagem(
		personagem: Personagem,
		characterImage: app.UploadedFile
	): Promise<number> {
		let resultadoQuery;

		await app.sql.connect(async (sql) => {
			await sql.beginTransaction();

			const icon = personagem.icon ? 1 : 0;

			resultadoQuery = await sql.query(
				`insert into personagem (
					nome, icon, nivel, experiencia, tormento, subtormento, 
					fisico, agilidade, inteligencia, coragem, pv, def, 
					iniciativa, acoes, antecedentes_pontos, antecedentes_json, 
					habilidade_json, equipamentos_json, cavalo_json, recompensa, dinheiro) 
					values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
				[
					personagem.nome,
					icon,
					personagem.nivel,
					personagem.exp,
					personagem.tormento.main,
					personagem.tormento.sub,
					personagem.atributos.fisico,
					personagem.atributos.agilidade,
					personagem.atributos.inteligencia,
					personagem.atributos.coragem,
					personagem.pv,
					personagem.def,
					personagem.iniciativa,
					personagem.acoes,
					personagem.antecedentesPontos,
					JSON.stringify(personagem.antecedentes),
					JSON.stringify(personagem.habilidades),
					JSON.stringify(personagem.equipamentos),
					JSON.stringify(personagem.cavalo),
					personagem.recompensa,
					personagem.dinheiro,
				]
			);

			if (characterImage !== null) {
				await app.fileSystem.saveUploadedFile(
					`/public/img/characters/${resultadoQuery.insertId}.jpg`,
					characterImage
				);
			} else {
				personagem.icon = false;
			}

			await sql.commit();
		});
		return Promise.resolve(resultadoQuery.insertId);
	}

	public static async updatePersonagem(
		personagem: Personagem,
		characterImage: app.UploadedFile
	): Promise<number> {
		await app.sql.connect(async (sql) => {
			await sql.beginTransaction();

			let result =await sql.query(
				`update personagem set
				nome = ?, 
				icon = ?, 
				nivel = ?, 
				experiencia = ?, 
				tormento = ?, 
				subtormento = ?, 
				fisico = ?, 
				agilidade = ?, 
				inteligencia = ?, 
				coragem = ?, 
				pv = ?, 
				def = ?, 
				iniciativa = ?, 
				acoes = ?, 
				antecedentes_pontos = ?, 
				antecedentes_json = ?, 
				habilidade_json = ?, 
				equipamentos_json = ?, 
				cavalo_json = ?, 
				recompensa = ?, 
				dinheiro = ?
				where id = ?;`,
				[
					personagem.nome,
					personagem.icon,
					personagem.nivel,
					personagem.exp,
					personagem.tormento.main,
					personagem.tormento.sub,
					personagem.atributos.fisico,
					personagem.atributos.agilidade,
					personagem.atributos.inteligencia,
					personagem.atributos.coragem,
					personagem.pv,
					personagem.def,
					personagem.iniciativa,
					personagem.acoes,
					personagem.antecedentesPontos,
					JSON.stringify(personagem.antecedentes),
					JSON.stringify(personagem.habilidades),
					JSON.stringify(personagem.equipamentos),
					JSON.stringify(personagem.cavalo),
					personagem.recompensa,
					personagem.dinheiro,
					personagem.id,
				]
			);

			if (characterImage !== null) {
				await app.fileSystem.saveUploadedFile(
					`/public/img/characters/${personagem.id}.jpg`,
					characterImage
				);
			} else {
				personagem.icon = false;
			}

			await sql.commit();
		});
		return Promise.resolve(personagem.id);
	}
}

export default Personagem;
