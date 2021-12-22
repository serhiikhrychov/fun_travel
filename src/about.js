import 'bootstrap-grid/dist/grid.min.css'
import './style/about.css'
import headerImg from './images/about/header_about.png'
import aboutImg from './images/about/image.png'

//Add body image
// const body = document.getElementById('about-page');
const header = document.getElementById('header-about');

header.style.backgroundImage = "url('./src/images/about/header_about.png')";

const imagesOnThePage = [aboutImg];

// array with new Image()
imagesOnThePage.forEach((img, index) =>{
    const pageImg = new Image()
    pageImg.src = img
    return imagesOnThePage[index] = pageImg;
});

// create array with DOM elements + add new element
const imagesColumns = [];
for (let i=1; i<=imagesOnThePage.length; i++)
{
    imagesColumns[i-1] = document.getElementById('second-col' + [i]);
    imagesColumns[i-1].appendChild(imagesOnThePage[i-1]);
}