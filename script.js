const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', 'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));