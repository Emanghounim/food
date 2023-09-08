// $("html").ready(function(){
// $(".lds-roller").hide(3000,function(){
//     $(".lode").hide(1000,function(){
//          $("body").css("overflow","auto")
//          $(".lode").remov()
//     }) 

// })

// })
//////////////////////////////////////////////////

// //////////////////////////////////////////////////////
let rowSingle = document.getElementById("rowSingle")
let row = document.getElementById("row")
let inputLeater = document.getElementById("btnLeater")

function apiCategry() {
    fetch("http://www.themealdb.com/api/json/v1/1/categories.php").then((respons) => {
        let res = respons.json()
        return res
    }).then((meal) => {
        const data = meal.categories
        data.map((item) => {
            row.innerHTML += `<div class="col-md-4">
        <div class="home-meal position-relative ">
            <img src=${item.strCategoryThumb} class="" id="img" alt="">
            <div class="layar bg-dark position-absolute  animate__animated animate__fadeInUp ">
            
            <p class="text-center p-2 ">${item.strCategoryDescription}</p>
              <h1 class="h">${item.strCategory}</h1>
            </div>
          </div>
          </div>
          `
        })
    })
}
apiCategry()
// ///////////////////////////////


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
        <div id="a" onclick="open_alert()" ><div data-id="${meals.idMeal}" class="layar bg-dark position-absolute animate__animated animate__fadeInUp">
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

//////////////////////////////////////////

