const baseUrl = process.env.REACT_APP_NEWS_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchGet = (category = '') => {
	const url = `${baseUrl}?apiKey=${apiKey}&country=us&category=${category}`;
	return fetch(url);
};

export const fetchGetSearch = (query = '') => {
	const url = `${baseUrl}?apiKey=${apiKey}&country=us&q=${query}`;
	return fetch(url);
};
