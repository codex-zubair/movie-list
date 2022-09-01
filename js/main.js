// Top Action Movie List.

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '211d193a7bmsh57efec3a062a335p17537bjsnb958aaf1b67e',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', options)
	.then(response => response.json())
	
	.then(response => console.log(response))
	.catch(err => console.error(err));