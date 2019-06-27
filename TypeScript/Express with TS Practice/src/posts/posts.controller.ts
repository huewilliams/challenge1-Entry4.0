import * as express from 'express';
import Post from './post.interface';
import Controller from '../interfaces/controller.interface';

class PostsController implements Controller{
    public path = '/posts';
    public router = express.Router();

    private posts: Post[] = [
        {
            author: 'huewilliams',
            content: 'test content',
            title: 'test request'
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createPosts);
    }

    getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.posts);
    }

    createPosts = (request: express.Request, response: express.Response) => {
        const post: Post = request.body;
        this.posts.push(post);
        response.send(post);
    }
}

export default PostsController;
