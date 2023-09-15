import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ item }) => {

	const [cantidad,setCantidad] = useState(1);

	const handleRestar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	}

	const handleSumar = () => {
		cantidad < item.stock && setCantidad(cantidad + 1);
	}

	const handleAgregar = () => {
		console.log({item, cantidad});
	}

	return (
		<div className="container">
			<div className="producto-detalle">
				<img src={item.images.jpg.large_image_url} alt={item.title} />
				<div>
					<h2 className="titulo">{item.title}</h2>
					<p className="descripcion">{item.synopsis}</p>
					<p className="categoria">Categoría: {item.type}</p>
					<p className="precio">${item.score}</p>
					<ItemCount
						cantidad={cantidad}
						handleSumar={handleSumar}
						handleRestar={handleRestar}
						handleAgregar={handleAgregar}
					/>
				</div>
			</div>
		</div>
	)
}

export default ItemDetail