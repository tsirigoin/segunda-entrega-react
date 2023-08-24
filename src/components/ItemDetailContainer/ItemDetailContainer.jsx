import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import data from '../../data/database.json';


const ItemDetailContainer = () => {

	const [item, setItem] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const PedirDetalle = () => {
			return new Promise((resolve, reject) => {
				resolve(data.data.filter(elem => elem.mal_id == id));
			});
		};

		PedirDetalle().then((res) => {
			setItem(res[0]);
		});
	}, [id]);

	return (
		<div>
			{item && <ItemDetail item={item} />}
		</div>
	)
}

export default ItemDetailContainer