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
const universityList = (university)=>
{
    console.log(university);
    document.getElementById('modal').style.display = 'block';
    
    
    university.forEach(university => {




        // !Parent OL
        var parentOl= document.getElementById('university-list-ol');
        // !Parent OL


        // Creating li
        const li = document.createElement('li');
        // Creating li


        // !Configuring li Values...
        li.classList.add("mb-5", "text-lg", "font-normal", "text-white");
        li.setAttribute('type',1);
        // !Configuring li Values...

        li.innerText = university.name;

        li.innerHTML = `<a class="text-white hover:text-lime-400" href="www.google.com">${university.web_pages[0]}</a>`

        
        // !Append into OL as a Child...
        parentOl.appendChild(li);
        // !Append into OL as a Child...
        
        




       
        
    });
    
}
// !All University List of Specific Country End








// ! Modal Section Close Button
document.getElementById('university-list-close-btn').addEventListener('click',()=>{
    document.getElementById('modal').style.display = 'none';
    parentOl.innerHTML = ``;
});
// ! Modal Section Close Button