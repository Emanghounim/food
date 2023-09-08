let rowSingle = document.getElementById("rowSingle")

// let alert = document.querySelector('#alert')
let alertt = document.getElementById('alert')
let rowAllCategry = document.getElementById("rowAllCategry")
let a = document.querySelector("a")

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




function open_alert() {
    alertt.classList.add('open')
    rowAllCategry.classList.replace("d-flex", "d-none")

}
function close_alert() {
    alertt.classList.remove('open')
    rowAllCategry.classList.replace("d-none", "d-flex")

}


function allPhotoHome() {

    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((response) => {

        let apiHome = response.json()
        return apiHome
    }).then((apiresponse) => {
        let apoohote = apiresponse.meals
        apoohote.map((allcategry) => {
            rowAllCategry.innerHTML += ` <div class="col-md-4">
        <div class="home-meal position-relative p-2 ">
        <img src=${allcategry.strMealThumb} class="" id="img" alt="">
        <div class="a" onclick="open_alert()" >  
        <div class="layar bg-dark position-absolute animate__animated animate__fadeInUp" data-id="${allcategry.idMeal}">
             <h1 class="h text-white text-center m-1">${allcategry.strMeal}</h1> 
            </div>
          </div>
          </div> 
          </div>   
          `
        })
    })
}

allPhotoHome()
rowAllCategry.addEventListener('click', apiSinglePadge)



function apiSinglePadge(e) {

    let id = e.target.getAttribute('data-id')

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => {
        return response.json()
    }).then((data) => {

        let singlePadg = data.meals
        singlePadg.map((single => {
            alertt.innerHTML += `
    <div class="col-md-4">
    <img src="${single.strMealThumb}" class="w-75 h-25" alt="">
    <h3>${single.strTags}</h3>
</div>
<div class="col-md-8">
    <h1>${single.strMeal}</h1>
    <p>${single.strInstructions}</p>
    <h3>Area : ${single.strArea}</h3>
    <h3>Category : ${single.strCategory}</h3>
    <h3>${single.strIngredient7} :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-info m-2 p-1">1kg Beef</li>
        <li class="alert alert-info m-2 p-1">2 tbs Plain Flour</li>
        <li class="alert alert-info m-2 p-1">2 tbs Rapeseed Oil</li>
        <li class="alert alert-info m-2 p-1">200ml Red Wine</li>
        <li class="alert alert-info m-2 p-1">400ml Beef Stock</li>
        <li class="alert alert-info m-2 p-1">1 finely sliced Onion</li>
        <li class="alert alert-info m-2 p-1">2 chopped Carrots</li>
        <li class="alert alert-info m-2 p-1">3 sprigs Thyme</li>
        <li class="alert alert-info m-2 p-1">2 tbs Mustard</li>
        <li class="alert alert-info m-2 p-1">2 free-range Egg Yolks</li>
        <li class="alert alert-info m-2 p-1">400g Puff Pastry</li>
        <li class="alert alert-info m-2 p-1">300g Green Beans</li>
        <li class="alert alert-info m-2 p-1">25g Butter</li>
        <li class="alert alert-info m-2 p-1">pinch Salt</li>
        <li class="alert alert-info m-2 p-1">pinch Pepper</li>
    </ul>
    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">

        <li class="alert alert-danger m-2 p-1">Meat</li>
        <li class="alert alert-danger m-2 p-1">Pie</li>
    </ul>
    <a target="_blank" href="${single.strYoutube}"
        class="btn btn-success">Source</a>
    <a target="_blank" href="${single.strYoutube}"
        class="btn btn-danger">Youtube</a>
</div>
    
    
    `
        }))

    })
}

