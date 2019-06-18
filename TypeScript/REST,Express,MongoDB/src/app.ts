import express from "express";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // parse application/json post data
        this.app.use(express.json());

        // parse application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false}));
    }

}

export default new App().app;
