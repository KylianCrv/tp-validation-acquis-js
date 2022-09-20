const tab = [
    {
      title:'City 1',
      url:'https://res.cloudinary.com/jochri3/image/upload/v1658920016/gif%20exercices/gallery/city-1.jpg',
    },
    {
      title: 'City 2',
      url:'https://res.cloudinary.com/jochri3/image/upload/v1658920016/gif%20exercices/gallery/city-2.jpg'
    },
    {
      title:'City 3',
      url:'https://res.cloudinary.com/jochri3/image/upload/v1658920016/gif%20exercices/gallery/city-3.jpg'
    },
    {
      city:'City 4',
      url:'https://res.cloudinary.com/jochri3/image/upload/v1658920016/gif%20exercices/gallery/city-4.jpg',
    },
    {
      title: 'City 5',
      url:'https://res.cloudinary.com/jochri3/image/upload/v1658920015/gif%20exercices/gallery/city-5.jpg'
    }
  ];
const carrousel = document.querySelector('#carrousel')
const previousBtn = document.querySelector('#previous-button')
const nextBtn = document.querySelector('#next-button')
let count = 0;

  console.log(tab);

  showDisplay(count);

  nextBtn.addEventListener('click', function(){
    if(count<tab.length-1){
        count++;
        showDisplay(count)
    }else
    count = 0;
    showDisplay(count)
})

previousBtn.addEventListener('click',function(){
    if(count>0){
        count--;
        showDisplay(count)}
    else
    count = tab.length-1
    showDisplay(count)
})


  function showDisplay(count){
    carrousel.innerHTML = `<img src="${tab[count].url}"></img>`
}