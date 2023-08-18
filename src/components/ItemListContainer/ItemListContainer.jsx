import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import data from '../../data/database.json';

export default function ItemListContainer() {
	const [productos, setProductos] = useState([]);

	const [titulo, setTitulo] = useState("Productos");

	useEffect(() => {
		const PedirProductos = () => {
			return new Promise((resolve, reject) => {
				resolve(data)
			})
		};

		PedirProductos().then((res) => {
			setProductos(res.data);
		})
	}, [])


	return (
		<div>
			<ItemList  productos={productos} titulo={titulo} />
		</div>
	)
}
