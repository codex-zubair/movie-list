// Country Wise University. API



callingAllUniversityList = async (countryName) => {
    universityUrl = `http://universities.hipolabs.com/search?country=${countryName}`;

    try {

   
        const response = await fetch(universityUrl);

        const country = await response.json();

        universityList(country);
     

    }
    catch (error) {
        console.log(error);
    }
}








// !All University List of Specific Country Start
const universityList = (country)=>
{
    console.log(country);
    
    
    country.forEach(country => {

        console.log(country.name);
        console.log(country.web_pages[0]);
       
        
    });
    
}
// !All University List of Specific Country End



