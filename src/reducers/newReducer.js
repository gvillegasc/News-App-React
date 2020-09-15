import { types } from '../types/types';

const initialState = {
	loading: true,
	news: [],
};

export const newReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.newsLoaded:
			return { ...state, news: [...action.payload] };

		case types.isLoading:
			return { ...state, loading: true };

		case types.isNotLoading:
			return { ...state, loading: false };

		default:
			return state;
	}
};
