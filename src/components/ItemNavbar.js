import React from 'react';
import { useDispatch } from 'react-redux';
import { newsLoad } from '../actions/news';

export const ItemNavbar = ({ category }) => {
	const dispatch = useDispatch();

	const handleSelectCategory = (category) => {
		dispatch(newsLoad(category));
	};
	return (
		<span
			onClick={() => handleSelectCategory(category.toLowerCase())}
			className="navbar-item btn"
		>
			{category}
		</span>
	);
};
