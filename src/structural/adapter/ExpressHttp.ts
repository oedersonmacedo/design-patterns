import express from "express";
import Http from "./Http";

export default class ExpressHttp implements Http {
	server: any;

	constructor () {
		this.server = express();
	}
	
	async route(method: string, url: string, callback: any): Promise<any> {
		this.server[method](url, async function (req: any, res: any) {
			const result = await callback(req.params, req.body);
			res.json(result);
		});
	}

	async listen(port: number): Promise<void> {
		await this.server.listen(port);
	}
}