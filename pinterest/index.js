var arr = [
    {name: "Ms Dhoni", image: "https://i.pinimg.com/736x/37/d6/72/37d672a1f0e92ce8e5ca0ad9c26d3dad.jpg"},
    {name: "Animals of town", image: "https://i.pinimg.com/originals/09/c6/29/09c62903beeba336dc9da76eb5c9a107.gif" },
    {name: "the crowd of city", image: "https://i.pinimg.com/564x/fe/ad/d2/feadd252b548fee09fb69f780fc29aa4.jpg" },
    {name: " planet", image: "https://i.pinimg.com/564x/87/c4/13/87c413a895e16fe66a553c0e411a628d.jpg" },
    {name: "javascript", image: "https://i.pinimg.com/564x/a5/6d/89/a56d891917abc6b4e44000ab673690da.jpg" },
    {name: "orange peeled", image: "https://i.pinimg.com/736x/bb/17/1f/bb171ff3c32d00aff7620053d6b192f2.jpg"},
    {name: "home the lane", image: "https://i.pinimg.com/564x/3c/6c/67/3c6c672abb8ff7963c097df72b623537.jpg"},
    {name: "mrs-been ", image: "https://i.pinimg.com/564x/95/da/a1/95daa19a4110e01f6841057c4fe1d17b.jpg"},
    {name: "coding", image: "https://i.pinimg.com/736x/b4/1a/8a/b41a8acccf85813efcddf1d93061ecc6.jpg"},
    {name: "panday ji", image: "https://i.pinimg.com/564x/6b/f1/c0/6bf1c0bbca7252b55ff0e58efef98c10.jpg"},
    {name: "monkey lazy", image: "https://i.pinimg.com/564x/c7/ad/51/c7ad51231cedb8b334fd02ea50011d18.jpg"},
    {name: "lazy", image: "https://i.pinimg.com/564x/c7/ad/51/c7ad51231cedb8b334fd02ea50011d18.jpg"},
    {name: "rohit Sharma", image: "https://i.pinimg.com/564x/28/57/3a/28573a7dda059f24e8d549b9cd317b76.jpg"},
    {name: "quotes", image: "https://i.pinimg.com/564x/48/55/6e/48556e1b8a12481cb2a7021816de1a15.jpg"},
    {name: "hanuman", image: "https://i.pinimg.com/564x/87/53/55/8753551a0af3ffec23dc95e49da17dc1.jpg"},


]



function showCards(){

    var clutter = "";

    arr.forEach((data) => {
        console.log(data)

        clutter += ` <div class="box">
        <img src= ${data.image} alt="">
        <div class="caption">Lorem ipsum </div>
    </div>
        
        `
    })

    document.querySelector('.container')
    .innerHTML = clutter
}

function handleSearch(){
    var input = document.querySelector('#searchinput');

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("#searchinput").style.border = "2px solid blue";

        

        
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
        document.querySelector("#searchinput").style.border = "none";
    document.querySelector(".searchdata").style.display = "none";


    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(data => data.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(data){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${data.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })


}

showCards()

handleSearch();