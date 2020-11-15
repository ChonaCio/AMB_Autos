const express = require('express');
const fn = require('./functions');
const app = express();
app.use(express.json());

app.post('/autos', (req, res) => {
	const rs = fn.insAuto(req.body);
	res.status(rs[0]).send(rs[1]);
});

app.put('/autos', (req, res) => {
	const rs = fn.updAuto(req.body);
	res.status(rs[0]).send(rs[1]);
});

app.get('/autos', (req, res) => {
	const rs = fn.getAllAutos()
	res.status(rs[0]).send(rs[1]);
});

app.get('/autos/:avIdentificador/:avBloque', (req, res) => {
	aviso = fn.getAuto(req.params.avIdentificador, req.params.avBloque);
	if(!aviso) res.status(404).send("No se encontro el aviso");
	res.status(200).send(aviso);
});

fn.jsonLoad(); // Carga JSON en memoria (ASYNC)
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('OK - Port: '.concat(port)))