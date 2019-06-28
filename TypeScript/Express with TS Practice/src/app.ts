import express from 'express';
import mongoose from 'mongoose';
import Controller from './interfaces/controller.interface';

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App is listening on the ${process.env.PORT} port`);
        })
    }

    // setting middleware (3rd party)
    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    // controller 와 요청 경로를 연결함 (라우팅)
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller: Controller) => {
            this.app.use('/', controller.router);
        })
    }

    private connectToDatabase() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_PATH,
        } = process.env;
        mongoose.connect(
            `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`,
            { useNewUrlParser: true}
            )
    }
}

export default App;
