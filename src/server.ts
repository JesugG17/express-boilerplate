import express, { Application } from "express";
import env from 'env';

export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 8080;
    }
}