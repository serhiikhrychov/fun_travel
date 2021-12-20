import tourImage from './images/tours_page/mainImage.png'
import 'bootstrap-grid/dist/grid.min.css'
import './style/tours.css'

import tour1 from './images/tours_page/Group 3.png'
import tour2 from './images/tours_page/Group 4.png'
import tour3 from './images/tours_page/Group 7.png'
import tour4 from './images/tours_page/Group 8.png'


//Add body image
const body = document.getElementById('tours-page');

body.style.backgroundImage = "url('./src/images/tours_page/mainImage.png')";

// add tours image

const tours = [tour1, tour2, tour3, tour4];

// array with new Image()
const arrOfImages = tours.map(tour => {
    const tourImg = new Image()
    tourImg.src = tour
    return tourImg;
})

// same with forEach

// tours.forEach((tour, index) =>{
//     const tourImg = new Image()
//     tourImg.src = tour
//     return tours[index] = tourImg;
// });

// create array with DOM elements + add new element
const columns = [];
for (let i=1; i<=arrOfImages.length; i++)
{
    console.log('tour' + [i]);
    columns[i-1] = document.getElementById('tour' + [i]);
    columns[i-1].appendChild(arrOfImages[i-1]);
}