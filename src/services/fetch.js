const baseUrl = 'http://newsapi.org/v2/top-headlines';
const apiKey = '431a2b39236d43baaafbf67530faa12d';

export const fetchGet = (category = '') => {
	var url = '';
	if (category === '') {
		url = `${baseUrl}?apiKey=${apiKey}&country=us`;
	}
	url = `${baseUrl}?apiKey=${apiKey}&country=us&category=${category}`;
	return fetch(url);
};

export const fetchGetSearch = (query = '') => {
	const url = `${baseUrl}?apiKey=${apiKey}&country=us&q=${query}`;
	return fetch(url);
};
