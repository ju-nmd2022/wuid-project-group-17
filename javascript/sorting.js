// the star rating is learned from https://www.youtube.com/watch?v=fQIerHqB71w&t=11s
//const allStars = dish.querySelectorAll(".star");
// I also get help from Lukas

let dish = document.querySelectorAll(".dish")
for (let i = 0; i < dish.length; i++) {
    const dishStars = dish[i].querySelectorAll(".star");

    dishStars.forEach((star, i) => {
        star.onclick = function() {
           let current_star_level = i +1;
    
           dishStars.forEach((star, j) => {
            if(current_star_level >= j + 1) {
            star.innerHTML = "&#9733";
            }else {
            star.innerHTML= "&#9734";
           } } ) 
           localStorage.setItem(dish[i] + "rating",current_star_level)
        }
    }
    )
}


const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger_icon.innerText =
    hamburger_icon.innerText === "menu" ? "close" : "menu";

  mobile_menu.classList.toggle("is-open");
});


// the following code is for the search bar, so far, very hard for me to understand, I gave up

// let search = document.getElementById("search")
// let showInput = document.getElementById("search-input")

// search.addEventListener("click", function(){
//     showInput.style.visibility= "visible";
// })

// const searchInput = document.querySelectorAll("[data-search]")
// let recipe = document.getElementById("dish")

// let recipes = []

// searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase()
//     recipes.forEach(recipe => {
//         const isVisible =
//         dish.toLowerCase().includes(value)
//         recipes.toggle("hide", !isVisible)
//     }
//     )

// })