const menu = document.querySelector('#menu')
const btnBreakfast = document.querySelector('#breakfast-btn')
const btnAll = document.querySelector('#all-btn')
const btnLunch = document.querySelector('#lunch-btn')
const btnShakes = document.querySelector('#shakes-btn')
const btnDinner = document.querySelector('#dinner-btn')
const url = 'https://json-server-frontend-training-production.up.railway.app/menu'

    // on récupère l'objet JSON
const responseJSON = await fetch(url)

//   on transforme en objet JS
const listMenu =  await responseJSON.json()
console.log(listMenu)

localStorage.clear();
localStorage.setItem('menus',JSON.stringify(listMenu));

showAll()

btnAll.addEventListener('click',function(){
menu.innerHTML = ""
    showAll();
})


btnBreakfast.addEventListener('click', function(){
    menu.innerHTML=""   
    filterCategory('breakfast')
})

btnLunch.addEventListener('click', function(){
    menu.innerHTML=""   
    filterCategory('lunch')
})

btnShakes.addEventListener('click', function(){
    menu.innerHTML=""   
    filterCategory('shakes')
})

btnDinner.addEventListener('click', function(){
    menu.innerHTML=""   
    filterCategory('dinner');
})


function filterCategory(filterName){
    listMenu.forEach(i => {
     
        if(i.category === (filterName)){
        let bloc =  `<p>${i.title}<br>
        ${i.category}<br>
        ${i.price}<br>
        ${i.desc}`
    
        menu.innerHTML += bloc 
        }
    })
}

function showAll(){
    listMenu.forEach(i => {
        let bloc =  `<p>${i.title}<br>
        ${i.category}<br>
        ${i.price}<br>
        ${i.desc}`
    
        menu.innerHTML += bloc
                
    });
}