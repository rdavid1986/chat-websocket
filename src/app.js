import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

//accede a carpeta js de la carpeta public
app.use(express.static(`${__dirname}/public`));

//para trabnajar con los motorex de plantilla handlebars
app.engine('handlebars', handlebars.engine());
//dirname views
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

//importamos el router desde views.router
app.use('/', viewsRouter)

//open server at port 8080
const server = app.listen(8080, () => console.log('server running'));
//server.listen on constant io
const io = new Server(server);


