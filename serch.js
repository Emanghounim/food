
let Btn = document.getElementById("input-btn")
let btnName = document.getElementById("btnName")

let rowInput = document.getElementById("rowInput")

let icona = document.getElementById("icona")
$(".sideBar .slider .slider-icon i").click(function () {
    let sideBarIcon = $("#nav").innerWidth();
    let nav = document.getElementById("nav")
    nav.classList.remove("d-none")
    if ($(".sideBar").css("left") == "0px") {
        $(".sideBar").animate({ left: -sideBarIcon }, 500)
        icona.classList.replace("fa-xmark", "fa-bars")
    } else {
        $(".sideBar").animate({ left: "0px" }, 1000)
        icona.classList.replace("fa-bars", "fa-xmark")
    }
});

function getApi(){
    let searchInput=btnName.value
    fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(response => response.json())
    .then(data=>{
        // console.log(data.meals);
        let s=data.meals
        if(s){
s.map(meal => (
    rowInput.innerHTML+=`<div class="col-md-4">
         <div class="home-meal position-relative ">
             <img src=${meal.strMealThumb} class="" id="img" alt="">
             <div class="layar bg-dark position-absolute  animate_animated animate_fadeInUp " data-id="${meal.idMeal}>
               <h1 class="h">${meal.strMeal}</h1>
             </div>
           </div>
           </div>

`  
))
}else{
    console.log("h");
}
}
    )}
    Btn.addEventListener('click',getApi)

