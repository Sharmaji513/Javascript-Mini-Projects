


const generateBtn = document.querySelector(".gen-btn")
const memeImage = document.querySelector(".meme-img")
const memeTitle = document.querySelector(".heading")
const authorText = document.querySelector(".author")



function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=> res.json())
    .then((data) =>{
        console.log(data)  
    //   title.innerHTML = data.title
    //   memeImage.src = data.url
    //Destructor
    const {title, url , author} = data
    memeTitle.innerHTML = title
    memeImage.src = url
    authorText.innerHTML = `Memes By : ${author}`
   

    })

}

getMeme();

generateBtn.addEventListener('click' , () =>{
    getMeme()
    
})

























