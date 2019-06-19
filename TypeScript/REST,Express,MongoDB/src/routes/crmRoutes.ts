import {Application, Request, Response} from "express";

export class Routes {
    public routes(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful'
                })
            })

        app.route('/contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful'
                })
            })
            .post((req:Request, res: Response) => {
                res.status(200).send({
                    message: 'POST request successful'
                })
            })

        app.route('/contact/:contactId')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful'
                })
            })
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'PUT request successful'
                })
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'DELETE request successful'
                })
            })
    }
}
