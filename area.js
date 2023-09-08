
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

function area() {
    fetch("http://www.themealdb.com/api/json/v1/1/list.php?a=list").then((response) => {
        let api = response.json()
        return api
    }).then((aaa) => {
        let aliArea = aaa.meals
        console.log(aliArea);
        aliArea.map((data) => {
            rowHome.innerHTML += `<div class="col-md-4  text-center">
        <div class="item p-2">
     <i class="fa-solid fa-house fs-1 text-white " id="iconHome"></i>
     <h2 class=" text-white m-3" id="textHome">${data.strArea}</h2>
      </div>
         </div>
 `
        })
    })
}
area()