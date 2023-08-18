import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/' className='logo'><h1>Octavo Portal</h1></Link>
			<ul className='menu'>
				<li><Link className='menu-link' to='/'>Inicio</Link></li>
				{/* <li><Link className='menu-link' to='/productos/comics'>Comic</Link></li> */}
				<li><Link className='menu-link' to='/productos/mangas'>Manga</Link></li>
				{/* <li><Link className='menu-link' to='/productos/libros'>Libros</Link></li> */}
				<li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
				<li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
				{/* <li><CartWidget /></li> */}
			</ul>
		</nav>
	)
}

export default Navbar;