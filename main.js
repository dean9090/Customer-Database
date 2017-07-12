
// const container = document.querySelector(".container")

// let header = document.createElement("h1");
// header.innerHTML = "Internal Company Directory";
// container.appendChild(header);
const companyDir = document.querySelector(".companyDir")


let profile = document.createElement("div");
profile.classList.add("profile")            // adds class to created div class is profile
companyDir.appendChild(profile)           // appends profile to companyDir

let img = document.createElement("img");

profile.appendChild(img)





// ******************GET DATA**************



for (var i = 0; i < customers.results.length; i++) {
  let person = customers.results[i];

  // creates new profile for every itteration for every person
  let profile = document.createElement("div");
  profile.classList.add("profile");
  companyDir.appendChild(profile);

  // ***************Picture*****************

  let pic = person.picture.large; // get persons image
  let pPic = document.createElement("img"); // create img element on page
  pPic.classList.add("Picture");
  pPic.src = pic; // p element has been assigned pic with src attribute
  profile.appendChild(pPic);// append picture element to page


  //*********** Persons name ************

  let name = person.name.first + " " +person.name.last; // creating element for name on html
  let pName = document.createElement("p"); // setting name from above to p element
  pName.classList.add("Name");
  pName.innerHTML = name;                 // setting the value (first and last name) to element
  profile.appendChild(pName);             // appending element to profile



// ***************EMAIL******************
let mail = person.email;                    // getting email info from data
let pMail = document.createElement("p");    // creating p element to store data later
pMail.classList.add("Email");
pMail.innerHTML = mail;                     //
profile.appendChild(pMail);                 //




// ****************ADDRESS*******************

let address = person.location.street + " " + person.location.city +" "+ person.location.state +" "+ person.location.postcode;
let pAddrress = document.createElement("p");
pAddrress.classList.add("Address");
pAddrress.innerHTML = address;
profile.appendChild(pAddrress);



// **************PHONE NUMBER*****************
let phone = person.phone; // gets the data for the phone
let pPhone = document.createElement("p");
pPhone.classList.add("Phone");
pPhone.innerHTML = phone;
profile.appendChild(pPhone);



// *****************SS*********************
let social = person.id.value;
let pSocial = document.createElement("p");
pSocial.classList.add("Social");
pSocial.innerHTML = social;
profile.appendChild(pSocial);


}







//
