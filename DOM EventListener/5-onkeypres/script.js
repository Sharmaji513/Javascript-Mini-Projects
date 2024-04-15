let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="You have Pressed " + e.key
})

