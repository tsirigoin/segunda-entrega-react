import Item from '../Item/Item';

const ItemList = ({ productos }) => {
	return (
		<div className='container'>
			<h1 className='main-title'> MANGAS </h1>
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