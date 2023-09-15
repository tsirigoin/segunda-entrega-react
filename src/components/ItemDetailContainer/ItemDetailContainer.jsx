import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import data from '../../data/database.json';
import { getById } from "../../helpers/askData";


const ItemDetailContainer = () => {

	const [item, setItem] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getById(id)
			.then((res) => {
				setItem(res);
			});
	}, [id]);

	return (
		<div>
			{item && <ItemDetail item={item} />}
		</div>
	)
}

export default ItemDetailContainer