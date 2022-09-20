const submitBtn = document.querySelector('#addButton')
const todoList = document.querySelector('.list-items')
const tab = []


submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    // console.log(todo.value)

    if(todo.value !== ''){
        tab.push(todo.value)
    }

    refresh();
})

function refresh(){
    todoList.innerHTML ="";
    tab.forEach(item =>{
        let itemBlock = `<li>${item}</li>`

        todoList.innerHTML += itemBlock;

    })
}