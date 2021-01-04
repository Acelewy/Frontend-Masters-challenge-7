const carouselSlide = document.querySelector('.one');
const carouselPart = document.querySelectorAll('.one .first');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let counter = 0;

const size = carouselPart[0].clientWidth;


next.addEventListener('click' ,()=>{
    counter++;
    if(counter>1){
        counter=0;
    }
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

});

previous.addEventListener('click', () => {
    counter--;
    if(counter<0){
        counter = 1;
    }
	console.log(counter);
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});
