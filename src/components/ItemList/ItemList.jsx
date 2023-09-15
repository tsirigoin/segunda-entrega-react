import Item from '../Item/Item';

const ItemList = ({ productos, titulo }) => {
	return (
		<div className='container'>
			<h2 className='main-title'> { titulo } </h2>
			<div className='productos'>
				{
					productos.map((producto) => {
						return (
							<div key={producto.mal_id}>
								<Item producto={producto} />
							</div>
						)
					})
				};
			</div>
		</div>
	)
}

export default ItemList;