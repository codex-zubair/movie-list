// Top Movie Category List.
callingTopCategoryMovies = ()=>
{
	options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '211d193a7bmsh57efec3a062a335p17537bjsnb958aaf1b67e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};
	
	
	fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', options)
		.then(response => response.json())
		.then(category => categoryList(category.genres))
		.catch(err => console.error(err));
}



callingTopCategoryMovies();





// Getting The Value Of Top Category Movie Movie List...

categoryList = (categoryList)=> {	
	
	categoryList.forEach(category => {
		console.log(category);


		//! Getting The Category Parent Section
		const parentSection = document.getElementById('category-section');

		




		// !Creating Card Div For Parent Section.
		const	div = document.createElement('div');

		

		// ! Adding Calls List...
		div.classList.add('p-6', 'max-w-sm', 'bg-white', 'rounded-lg', 'border', 'border-gray-200', 'shadow-md', 'dark:bg-gray-800', 'dark:border-gray-700');




		div.innerHTML = `
		<a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${category.description}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
		`


		parentSection.appendChild(div);



	});

}