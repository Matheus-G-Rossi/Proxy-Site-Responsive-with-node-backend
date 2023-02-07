const express = require('express');
const app = express();

const PORT = '5500'

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Site Proxies' });
});

app.get('/produtos', (req, res, next) => {
    res.render('produtos', { title: 'produtos proxies' });
});

app.get('/faq', (req, res, next) => {
    res.render('faq', { title: 'F.A.Q' });
});
    
app.listen(PORT, () => {
    console.log('Aplicação rodando na porta ' + PORT);
});

app.use(function (req, res, next) {
    res.status(404).render('paginaInexistente');
  });