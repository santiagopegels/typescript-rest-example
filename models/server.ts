import express, { Application } from "express";
import userRoute from "../routes/user";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    //Definir middlewares
    this.middlewares()
    
    //Definir rutas
    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoute);
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    
    //Body parser
    this.app.use( express.json() )

    //public folder
    this.app.use( express.static('public'))
}

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Corriendo en Puerto: " + this.port);
    });
  }
}

export default Server;
