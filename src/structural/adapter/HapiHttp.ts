import Http from "./Http";
import Hapi from "@hapi/hapi";

export default class HapiHttp implements Http {
    server: Hapi.Server;

    constructor() {
        this.server = Hapi.server({});
    }

    async route(method: string, path: string, callback: any): Promise<any> {
        this.server.route({
            path,
            method,
            handler(request: any, h: any) {
                return callback(request.params, request.body);
            }
        })
    }

    async listen(port: number): Promise<void> {
        this.server.settings.port = port;
        await this.server.start();
    }
}