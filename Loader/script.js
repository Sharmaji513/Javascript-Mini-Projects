let num = document.querySelector('#number')



let counter =0;
setInterval(()=>{

    if(counter == 60){

        counter = 60;
    }else{
        counter ++
        console.log(counter)
        num.innerHTML = counter + "%"
    }
  
   

} ,30)