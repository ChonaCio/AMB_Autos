let fs = require("fs"), json;
let jsonDB;
const jsonFileLoc = 'lib/files/saveData.json';

module.exports = {
	jsonLoad: function () {
		fs.readFile(jsonFileLoc, (err, data) => {
			if (err) throw err;
			jsonDB = JSON.parse(data);
		});
	},

	getAllAutos: function () {
		return [200, jsonDB];
	},

	getAuto: function (avIdentificador, avBloque) {
		let jsonReg = jsonFind(avIdentificador.concat("/").concat(avBloque));
		if (jsonReg) {
			return [200, jsonReg];
		} else {
			return [404, "No se encontro el aviso"];
		}
	},

	updAuto: function (data) {
		if (jsonFind(data.aviso)) {
			jsonDB.splice(jsonFindIndex(data), 1);
			jsonDB.push(data);
			jsonSave(jsonDB);
			return [200, "OK"];
		} else {
			return [404, "No existe el registro"];
		}
	},

	insAuto: function (data) {
		if (!jsonFind(data.aviso)) { // Valida si ya existe el archivo
			jsonDB.push(data);
			jsonSave(jsonDB);
			return [200, "OK"];
		} else {
			return [403, "Ya existe el registro"];
		}
	}
};

function jsonFind (avisoFind) {
	return jsonDB.find(row => row.aviso === avisoFind);
}

function jsonFindIndex (avisoFind) {
	let index = jsonDB.findIndex(function(row, i){
		return row.aviso === avisoFind.aviso
	});
	return index;
}

function jsonSave (jsonData) {
	let data = JSON.stringify(jsonData, null, 2);
	fs.writeFile(jsonFileLoc, data, (err) => {
		if (err) throw err;
		console.log('Data written to file');
	});
}