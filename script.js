let searchButton = document.querySelector(".search-button");
let clicked = false;
let search_bar = searchButton.nextElementSibling;

searchButton.addEventListener("click", searchBar = () => {
    if (clicked == false) {
        search_bar.style.width = "200px";
        search_bar.style.transitionDuration = "500ms";
        clicked = true;
    }
    else {
        search_bar.style.width = "0px";
        search_bar.style.transitionDuration = "500ms";
        clicked = false;
    }

})