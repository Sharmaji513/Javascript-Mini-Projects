let scrollContainer = document.querySelector('.gallery') 
let backBtn = document.querySelector('#backBtn') 
let nextBtn = document.querySelector('#nextBtn')


scrollContainer.addEventListener('wheel' , (e)=>{

    e.preventDefault();

    scrollContainer.scrollLeft += e.deltaY
    // console.log(scrollContainer.scrollLeft += e.deltaY)

    scrollContainer.style.scrollBehavior = "smooth";

})

nextBtn.addEventListener('click' , ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=900;
    // console.log(scrollContainer.scrollLeft +=1200);
})

backBtn.addEventListener('click' , ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -=900;
})