import data from "../data/database.json";

export const search = (tipo) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (tipo == undefined) {
				resolve(data);
			} else {
				setTitulo(tipo.toUpperCase());
				
				resolve(data.filter(elem => elem.type.toLowerCase() == tipo));
			}
		}, 500)
	})
}

export const getById = (id) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			const item = (data.find(elem => elem.mal_id == id));

			if (item) {
				resolve(item)
			} else {
				reject({
					error: "No se encontró el elemento."
				})
			}
		}, 500);
	})
}