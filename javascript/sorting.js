// the star rating is learned from https://www.youtube.com/watch?v=fQIerHqB71w&t=11s
//const allStars = dish.querySelectorAll(".star");

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

localStorage.getItem


let search = document.getElementById("search")
let showInput = document.getElementById("search-input")

search.addEventListener("click", function(){
    showInput.style.visibility= "visible";
})

// the following searching methord is learned from https://www.youtube.com/watch?v=qp7PdguA0Vg
// https://www.youtube.com/watch?v=TlP5WIxVirU

// document.addEventListener("DOMContentLoaded", ()=> {

//     document.querySelectorAll(".dish-name").forEach(inputField => {

//     }) 

// });

const searchInput = document.querySelectorAll("[data-search]")
let recipe = document.getElementById("dish")

let recipes = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    recipes.forEach(recipe => {
        const isVisible =
        dish.toLowerCase().includes(value)
        recipes.toggle("hide", !isVisible)
    }
    )

})