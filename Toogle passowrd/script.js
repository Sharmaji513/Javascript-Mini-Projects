const input = document.querySelector('.input')
const eyeImg = document.querySelector('.img-input')


eyeImg .onclick = function(){
   if(input.type == "password"){
    eyeImg .src = "eye-open.png"
    input.type = "text"   
} else{
    input.type = "password" 
    eyeImg.src = "eye-close.png"
   }
    
}