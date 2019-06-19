import express from "express";
import {Routes} from "./routes/crmRoutes";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        // parse application/json post data
        this.app.use(express.json());

        // parse application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false}));
    }

}

export default new App().app;
