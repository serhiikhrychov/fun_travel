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


// second page
const imageOfHotel1 = new Image()
imageOfHotel1.src = hotel1

const imageOfHotel2 = new Image()
imageOfHotel2.src = hotel2

const imageOfHotel3 = new Image()
imageOfHotel3.src = hotel3

const landingPage = document.getElementById('landing-page');

// landingPage.style.backgroundImage = "url('./src/images/mainscr.png')";

document.body.style.backgroundImage = "url('./src/images/mainscr.png')";



const column1 = document.getElementById('second-page-column1');
column1.appendChild(imageOfHotel1);

const column2 = document.getElementById('second-page-column2');
column2.appendChild(imageOfHotel2);

const column3 = document.getElementById('second-page-column3');
column3.appendChild(imageOfHotel3);

// why we page

const imageOfWhyWe1 = new Image()
imageOfWhyWe1.src = whyWe1

const imageOfWhyWe2 = new Image()
imageOfWhyWe2.src = whyWe2

const imageOfWhyWe3 = new Image()
imageOfWhyWe3.src = whyWe3

const imageOfWhyWe4 = new Image()
imageOfWhyWe4.src = whyWe4

const imageOfWhyWe5 = new Image()
imageOfWhyWe5.src = whyWe5

const imageOfWhyWe6 = new Image()
imageOfWhyWe6.src = whyWe6

const whyColumn1 = document.getElementById('why-page-column1');
whyColumn1.appendChild(imageOfWhyWe1);

const whyColumn2 = document.getElementById('why-page-column2');
whyColumn2.appendChild(imageOfWhyWe2);

const whyColumn3 = document.getElementById('why-page-column3');
whyColumn3.appendChild(imageOfWhyWe3);

const whyColumn4 = document.getElementById('why-page-column4');
whyColumn4.appendChild(imageOfWhyWe4);

const whyColumn5 = document.getElementById('why-page-column5');
whyColumn5.appendChild(imageOfWhyWe5);

const whyColumn6 = document.getElementById('why-page-column6');
whyColumn6.appendChild(imageOfWhyWe6);

//contact us

const imageOfContactUs1 = new Image()
imageOfContactUs1.src = contact1

const imageOfContactUs2 = new Image()
imageOfContactUs2.src = contact2

const imageOfContactUs3 = new Image()
imageOfContactUs3.src = contact3

const imageOfContactUs4 = new Image()
imageOfContactUs4.src = contact4

const imageOfContactUs5 = new Image()
imageOfContactUs5.src = contact5

const imageOfContactUs6 = new Image()
imageOfContactUs6.src = contact6

const address = document.getElementById('address');
address.appendChild(imageOfContactUs1);

const phone = document.getElementById('phone');
phone.appendChild(imageOfContactUs2);

const email = document.getElementById('email');
email.appendChild(imageOfContactUs3);

const instIcon = document.getElementById('inst-icon');
instIcon.appendChild(imageOfContactUs4);

const faceIcon = document.getElementById('face-icon');
faceIcon.appendChild(imageOfContactUs5);

const tubeIcon = document.getElementById('tube-icon');
tubeIcon.appendChild(imageOfContactUs6);

let elem = document.createElement('div');
elem.innerHTML = "shit tour page";

const hi = document.getElementById('second-page-column1');
console.log(hi);
hi.append(elem);