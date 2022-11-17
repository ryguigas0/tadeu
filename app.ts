import app = require("teem");
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

app.run({
	// Configurações de acesso ao banco de dados.
	// Mais informações: https://www.npmjs.com/package/mysql2#using-connection-pools
	sqlConfig: {
		connectionLimit: 30,
		waitForConnections: true,
		charset: "utf8mb4",
		host: process.env.dbhost,
		port: Number.parseInt(process.env.dbport),
		user: process.env.dbuser,
		password: process.env.dbpassword,
		database: process.env.dbdatabase,
	},
	logRoutesToConsole: true,
	port: 3000,
});
