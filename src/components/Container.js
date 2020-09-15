import React, { useEffect } from 'react';
import { New } from './New';
import { useDispatch, useSelector } from 'react-redux';
import { newsLoad } from '../actions/news';
import { v4 as uuidv4 } from 'uuid';
import { Loading } from './Loading';
import { NotFound } from './NotFound';

export const Container = () => {
	const dispatch = useDispatch();

	const { news, loading } = useSelector((state) => state.new);

	useEffect(() => {
		dispatch(newsLoad());
	}, [dispatch]);

	return (
		<div className="container mt-5">
			{loading ? (
				<Loading />
			) : news.length === 0 ? (
				<NotFound />
			) : (
				// <div className="columns is-multiline is-full-mobile is-one-thirds-tablet is-one-quarte-desktop is-one-third-widescreen is-one-quarter-fullhd">
				<div className="columns is-multiline is-centered is-full-mobile is-one-thirds-tablet is-one-quarte-desktop is-one-third-widescreen is-one-quarter-fullhd">
					{news.map((newItem) => (
						<New key={uuidv4()} {...newItem} />
					))}
				</div>
			)}
		</div>
	);
};
