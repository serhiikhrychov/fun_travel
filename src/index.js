import 'bootstrap-grid/dist/grid.min.css'
import './style/index.css'

import mainscr from './images/mainscr.png'
import hotel1 from './images/Hotel1.png'
import hotel2 from './images/secondpage-hotel2.png'
import hotel3 from './images/secondpage-hotel3.png'

import whyWe1 from '/src/images/why_we/image 9.png'
import whyWe2 from '/src/images/why_we/image 10.png'
import whyWe3 from '/src/images/why_we/image 11.png'
import whyWe4 from '/src/images/why_we/image 12.png'
import whyWe5 from '/src/images/why_we/image 13.png'
import whyWe6 from '/src/images/why_we/image 14.png'

import contact1 from '/src/images/contact_us/image 15.png'
import contact2 from '/src/images/contact_us/image 16.png'
import contact3 from '/src/images/contact_us/image 17.png'
import contact4 from '/src/images/contact_us/image 18.png'
import contact5 from '/src/images/contact_us/image 19.png'
import contact6 from '/src/images/contact_us/image 20.png'

document.body.style.backgroundImage = "url('./src/images/mainscr.png')";

// SECOND PAGE

const hotels = [hotel1, hotel2, hotel3];

// array with new Image()
hotels.forEach((hotel, index) =>{
    const hotelImg = new Image()
    hotelImg.src = hotel
    return hotels[index] = hotelImg;
});

// create array with DOM elements + add new element
const hotelColumns = [];
for (let i=1; i<=hotels.length; i++)
{
    hotelColumns[i-1] = document.getElementById('second-page-column' + [i]);
    hotelColumns[i-1].appendChild(hotels[i-1]);
}

// WHY WE PAGE

const whyWeArray = [whyWe1, whyWe2, whyWe3, whyWe4, whyWe5, whyWe6];

whyWeArray.forEach((whyWeElem, index) =>{
    const whyWeElemImg = new Image()
    whyWeElemImg.src = whyWeElem
    return whyWeArray[index] = whyWeElemImg;
});

// create array with DOM elements + add new element
const whyWeColumns = [];
for (let i=1; i<=whyWeArray.length; i++)
{
    whyWeColumns[i-1] = document.getElementById('why-page-column' + [i]);
    whyWeColumns[i-1].appendChild(whyWeArray[i-1]);
}

//CONTACT US

const contactUsArray = [contact1, contact2, contact3, contact4, contact5, contact6];

// array with new Image()
contactUsArray.forEach((contactImgElement, index) =>{
    const contactImg = new Image()
    contactImg.src = contactImgElement
    return contactUsArray[index] = contactImg;
});

const address = document.getElementById('address');
address.appendChild(contactUsArray[0]);

const phone = document.getElementById('phone');
phone.appendChild(contactUsArray[1]);

const email = document.getElementById('email');
email.appendChild(contactUsArray[2]);

const instIcon = document.getElementById('inst-icon');
instIcon.appendChild(contactUsArray[3]);

const faceIcon = document.getElementById('face-icon');
faceIcon.appendChild(contactUsArray[4]);

const tubeIcon = document.getElementById('tube-icon');
tubeIcon.appendChild(contactUsArray[5]);
