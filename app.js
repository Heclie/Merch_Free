const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const publicPatch = path.resolve(__dirname, ("./public"))
app.use(express.static(publicPatch))

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/registrarse.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/iniciar sesion.html'));
});
app.use(express.static(publicPath));