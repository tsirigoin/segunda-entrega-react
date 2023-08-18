import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

	const [item, setItem] = useState(null);
	const id = useParams().id;

	return (
		<div>
			{item && <ItemDetail item={item} />}
		</div>
	)
}

export default ItemDetailContainer