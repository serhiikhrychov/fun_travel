import tourImage from './images/tours_page/mainImage.png'
import 'bootstrap-grid/dist/grid.min.css'
import './style/tours.css'

// const toursPage = document.getElementById('header');
//
// toursPage.style.backgroundImage = "url('./src/images/tours_page/mainImage.png')";

// document.body.style.backgroundImage = "url('./src/images/tours_page/mainImage.png')";

const tourHeaderImage = new Image()
tourHeaderImage.src = tourImage

const column1 = document.getElementById('header');
column1.appendChild(tourHeaderImage);

// event listener
const hello = document.getElementById('hello');

hello.addEventListener("click", () => {console.log('ssssss')});


// add new div
let elem = document.createElement('div');
elem.innerHTML = "shit tour page11111111111";

const hi = document.getElementById('header');

hi.append(elem);

console.log('heloo');


