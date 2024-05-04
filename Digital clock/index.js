const hours = document.querySelector('.hours')
const minutes = document.querySelector('.min')
const sec = document.querySelector('.sec')
const timePeriod = document.querySelector('.amorpm')




function upDateClock(){

    setInterval(()=>{
        let date = new Date()
        // console.log(date)
    
        
        if(hours > 12){
            hours -=12
            // console.log("PM")
            timePeriod.innerHTML = "PM"
        }else{
            // console.log("AM")
            timePeriod.innerHTML = "AM"
        }


        hours.innerHTML = (date.getHours()<10 ? "0" : " " )+  date.getHours()
        minutes.innerHTML = (date.getMinutes()<10 ? "0" : " ") + date.getMinutes()
        sec.innerHTML = (date.getSeconds()<10 ? "0" : " ") +  date.getSeconds()


    },1000)
}

upDateClock()