import React from 'react';
import { useDispatch } from 'react-redux';
import { newsLoadSearch } from '../actions/news';
import { useForm } from '../hooks/useForm';
import { ItemNavbar } from './ItemNavbar';

export const Navbar = () => {
	const [formValues, handleInputChange] = useForm({ search: '' });

	const { search } = formValues;

	const dispatch = useDispatch();
	const openHamburguer = () => {
		document.querySelector('.navbar-menu').classList.toggle('is-active');
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(newsLoadSearch(search));
	};
	return (
		<nav
			className="navbar is-dark"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<span className="navbar-item title-app">NEWS APP</span>

				<button
					className="navbar-burger button is-dark"
					aria-label="menu"
					aria-expanded="false"
					onClick={openHamburguer}
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start ">
					<ItemNavbar category="Business" />
					<ItemNavbar category="Entertainment" />
					<ItemNavbar category="General" />
					<ItemNavbar category="Health" />
					<ItemNavbar category="Science" />
					<ItemNavbar category="Sports" />
					<ItemNavbar category="Technology" />
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<form className="field has-addons" onSubmit={handleOnSubmit}>
							<div className="control">
								<input
									className="input"
									type="text"
									name="search"
									onChange={handleInputChange}
									value={search}
									placeholder="Find a new"
								/>
							</div>
							<div className="control">
								<button className="button is-active" type="submit">
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};
