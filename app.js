const express = require("express");
const app = express();

app.set('views', `${__dirname}/views`);//se configura la aplicación para que las vistas se cojan de la carpeta vistas
app.set("view engine", "hbs");// el motor de vistas es hbs
app.use(express.static(`${__dirname}/public`));//está lincando todo lo que es estático a la carpeta public



const routes = require('./config/routes.config');
app.use('/', routes);



app.listen(3000, () => console.log('listening on port 3000'))

