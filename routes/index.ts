import app = require("teem");
const nomeProjeto = "Tadeu"

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index", { titulo: nomeProjeto });
	}
}

export = IndexRoute;
