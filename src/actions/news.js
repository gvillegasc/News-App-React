import { fetchGet, fetchGetSearch } from '../services/fetch';
import { types } from '../types/types';

export const newsLoad = (category = '') => {
	return async (dispatch) => {
		try {
			dispatch(isLoadingNews());
			const resp = await fetchGet(category);
			const body = await resp.json();
			const events = body.articles;
			dispatch(startNewsLoad(events));
			dispatch(isNotLoadingNews());
		} catch (err) {
			dispatch(isNotLoadingNews());

			console.log(err);
		}
	};
};

export const newsLoadSearch = (query = '') => {
	return async (dispatch) => {
		try {
			dispatch(isLoadingNews());

			const resp = await fetchGetSearch(query);
			const body = await resp.json();
			const events = body.articles;

			dispatch(startNewsLoad(events));
			dispatch(isNotLoadingNews());
		} catch (err) {
			dispatch(isNotLoadingNews());

			console.log(err);
		}
	};
};

const startNewsLoad = (event) => ({
	type: types.newsLoaded,
	payload: event,
});

const isLoadingNews = () => ({
	type: types.isLoading,
});

const isNotLoadingNews = () => ({
	type: types.isNotLoading,
});
