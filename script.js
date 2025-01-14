

 const randomBtn = document.getElementById("random-color-btn")
 const eraseBtn = document.getElementById("erase-btn")
 const resetBtn = document.getElementById("reset-btn")
 const colorBtn = document.getElementById("color-btn")
 const inputEl = document.getElementById("input-el")




function createBoard(size) {
    const container = document.getElementById("screen")
    let squares = container.querySelectorAll(".grid")
    squares.forEach((grid) => grid.remove())
let columns = container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
let rows = container.style.gridTemplateRows = `repeat(${size}, 1fr)`
let amount = size * size
    for (let i = 0; i < amount; i++){
        const div = document.createElement('div')
        div.classList.add('grid')
        container.insertAdjacentElement('beforeend', div)
        }
 
}


createBoard(16)
function changeSize(input) {
    const inputField = document.getElementById("input-resize");

    if (input >= 2 && input <= 100) {
        createBoard(input); 
    } else {
        
        const originalPlaceholder = inputField.placeholder;
        inputField.style.borderColor = "red";
        inputField.placeholder = "Invalid number";
        inputField.value = ""; 

        
        setTimeout(() => {
            inputField.placeholder = originalPlaceholder;
        }, 1000);
    }
}






randomBtn.addEventListener('click', function(){
    const grids = document.querySelectorAll(`.grid`)
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", function(){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            grid.style.backgroundColor = `#` + randomColor
        })
    })
})

eraseBtn.addEventListener('click', function(){
    const grids = document.querySelectorAll(`.grid`)
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", function(){
            grid.style.backgroundColor = "lightgray"
        })
    })
})

resetBtn.addEventListener('click', function(){
const grids = document.querySelectorAll(`.grid`)
grids.forEach((grid) => {
    grid.style.backgroundColor = 'lightgray'
})
})

colorBtn.addEventListener('click', function(){
    const grids = document.querySelectorAll(`.grid`)
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", function(){
            grid.style.backgroundColor = colorBtn.value
        })
    })
})

