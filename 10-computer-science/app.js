let technos = [
  "Less",
  "Reactjs & Redux",
  "React Query",
  "Redux Saga",
  "Redux ToolKit",
  "Svelte",
  " Vue.js",
  "Angular",
  "Le CSS3",
  "Le SASS",
  "Le Javascript",
  "Typescript",
  "Algorithmes et structures de données",
  "Introduction à React.js",
  "React.js avancé",
  "L'architecture Redux",
];
const btnAdd = document.querySelector('.ajouter')
const btnReset = document.querySelector('.vider')
const techList = document.querySelector('#liste')
let count = 0;


btnAdd.addEventListener('click',function(){
  if(count <= technos.length){
    showRaw(count)
    count++;
  }
  
})

btnReset.addEventListener('click',function(){
  techList.innerHTML = "";
  count = 0;
})


function showRaw(data){
  let li = document.createElement('li')
  li.innerHTML=technos[data].valueOf();
  return techList.appendChild(li);

}