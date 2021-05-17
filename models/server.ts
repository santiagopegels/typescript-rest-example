import express, { Application } from "express";
import userRoute from "../routes/user";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    //Definir rutas
    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Corriendo en Puerto: " + this.port);
    });
  }
}

export default Server;
