const apiUrl="https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10'"
async function fetchEstste(){
    try{
    const response=await fetch(`${apiUrl}`);
    // if the status code is not in the range of 200 it thows that error
    
    if (!response.ok){
        throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    return await response.json();
}
// we catch here the error(exception) incase fetchEstate function doesn't work as expected
catch(e){
    console.log(e);
}
}
// setting up the estate poster and their properties

function setUpEstatesDetails(childEstate){
    const preview = document.getElementById('estatesListImageHolder')
    preview.src = childEstate.estatesListImageHolder;

    const estateTitle = document.querySelector('#title');
    estateTitle.textContent = childEstate.title;
    const address = document.querySelector('#address');
    address.textContent = `${childEstate.address}`;

    const estateDescription = document.querySelector('#estate-info');
    estateDescription.textContent = childEstate.description;
    const estatePrice= document.querySelector('#price')
    estatePrice.textContent = childEstate.price;
}
const btn = document.getElementById('buy')

        btn.addEventListener('click', function(e){
            let statusUpdate = document.querySelector('#status_button').textContent
            e.preventDefault()
			statusUpdate.textContent = 'Sold Out'
			btn.style.color.lightgray;
            
    });
	const btn1= document.getElementById('rent')

        btn.addEventListener('click', function(e){
            let statusUpdate = document.querySelector('#status_button').textContent
            e.preventDefault()
			statusUpdate.textContent = 'have been rent Out'
			btn1.style.color.lightgray;
            
    });
function listsEstates(estateContainerElementId){
    const estateContainerElement=document.getElementById(estateContainerElementId);
 // we return an element if it does not exists 
    if (!estateContainerElement)
    {
        return;
    }
    //otherwise we proceed if it do exists
    fetchEstste().then(estates => {
        if(!estates){
            estateContainerElement.innerHTML=" No Estate fetched";
            return;
        }
     for (const estate of estates)
     {
        estateContainerElement.appendChild(estatesElement(estate));
     }

    }).catch(e =>{
        console.log(e);
    })
    
    
}
 function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
 }



