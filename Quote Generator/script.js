const quote = document.querySelector('.quotes');
const authors = document.querySelector('.author')

const QUTOES_API = 'https://api.quotable.io/random'


// function quotes(){
//     fetch(QUTOES_API)
//    .then((response) => response.json())
//    .then((data) =>{
//     const {title, author} = data
//     quote.innerHTML = title
//     authors.innerHTML =author
// })
// }

async function quotes(){
    const response = await fetch(QUTOES_API)
    const data = await response.json()
    console.log(data)
    quote.innerHTML = data.content;
    authors.innerHTML = data.author

}

quotes( QUTOES_API)

function tweet(){
    window.open('https://twitter.com/intent/tweet?text='+ quote.innerHTML + " -- " + authors.innerHTML ,'Tweet Window', 'width: 600px height: 300px')
}



