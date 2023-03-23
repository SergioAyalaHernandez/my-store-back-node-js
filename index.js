const express = require('express'); // para usar express
const routerApi = require('./routes');
const app = express(); // express va a ser quien actue como constructor de la app
const port = 3000;

routerApi(app);
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.listen(port, ()=>{ //para que la app escuche por dicho puerto
  console.log('init in port '+port);
})
