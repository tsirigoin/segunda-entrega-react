import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import data from '../../data/database.json';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const { tipo } = useParams();
	const [titulo, setTitulo] = useState("PRODUCTOS");
	useEffect(() => {
		const PedirProductos = () => {
			return new Promise((resolve, reject) => {
				if (tipo == undefined) {
					resolve(data.data);
				} else {
					setTitulo(tipo.toUpperCase());
					resolve(data.data.filter(elem => elem.type.toLowerCase() == tipo));
				}
			})
		};

		PedirProductos().then((res) => {
			setProductos(res);
		})
	}, [tipo]);


	return (
		<div>
			<ItemList  productos={productos} titulo={titulo} />
		</div>
	)
}
