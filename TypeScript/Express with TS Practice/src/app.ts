import express from 'express';
import Controller from './interfaces/controller.interface';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: Controller[], port:number) {
        this.app = express();
        this.port = port;

        this.initalizeMiddlewares();
        this.initalizeControllers(controllers);
    }

    private initalizeMiddlewares() {
        this.app.use(express.json());
    }

    private initalizeControllers(controllers: Controller[]) {
        controllers.forEach((controller: Controller) => {
            this.app.use('/', controller.router);
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App is listening on the ${this.port} port`);
        })
    }
}

export default App;
