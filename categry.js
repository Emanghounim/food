
let rowHome = document.getElementById("rowHome")
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

////////////////////////////////////
let row = document.getElementById("row")

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