const decreaseBtn = document.querySelector('#decrease-button')
const resetBtn = document.querySelector('#reset-button')
const increaseBtn = document.querySelector('#increase-button')
const response = document.querySelector('#count')
let count = 0

resetBtn.addEventListener('click', function(){
    count =0;
    response.textContent = `${count}`;
    response.style.color = "grey"

})

increaseBtn.addEventListener('click', function(){
    count.value = count++;
    response.textContent = `${count}`;
    applyColor();

})

decreaseBtn.addEventListener('click', function(){
    count.value = count--;
    response.textContent = `${count}`;
    applyColor();
})

function applyColor(){
    if(count < 0){
        response.style.color = "red"
    }else{
        response.style.color = "green"
    }
}