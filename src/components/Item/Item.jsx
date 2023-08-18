import { Link } from "react-router-dom";

const Item = ({ producto }) => {
	return (
		<div className="producto">
			<img src={producto.images.jpg.large_image_url} alt={producto.title} />
			<div>
				<h2>{producto.title}</h2>
				<p>{producto.synopsis}</p>
				<br />
				<p>{producto.demographics.map((demo) => {
					return (demo.name)
				}).join(' - ')}</p>
				<p>Capítulos: {producto.chapters}</p>
				<p>Tipo: {producto.type}</p>
				<Link className="ver-mas" to={`/item/${producto.mal_id}`}>Ver más</Link>
			</div>
		</div>
	)
}

export default Item;