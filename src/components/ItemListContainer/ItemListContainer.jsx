import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { search } from '../../helpers/askData';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const { tipo } = useParams();
	const [titulo, setTitulo] = useState("PRODUCTOS");
	useEffect(() => {
		search(tipo)
			.then((res) => {
				setProductos(res);
			})
	}, [tipo]);


	return (
		<div>
			<ItemList  productos={productos} titulo={titulo} />
		</div>
	)
}
