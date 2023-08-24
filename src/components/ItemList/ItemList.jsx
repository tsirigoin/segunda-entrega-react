import Item from '../Item/Item';

const ItemList = ({ productos, titulo }) => {
	return (
		<div className='container'>
			<h1 className='main-title'> { titulo } </h1>
			<div className='productos'>
				{
					productos.map((producto) => {
						return (
							<div>
								<Item key={producto.mal_id} producto={producto} />
							</div>
						)
					})
				};
			</div>
		</div>
	)
}

export default ItemList;