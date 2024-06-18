const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEzZTQ5ZjBkNmU3M2JlNTM5YWM5YjFiYzNmYWIxOSIsInN1YiI6IjY2NmFiNTRmNGUzOTM4NDU2YWVhNWY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2LCRgdp9OXVpyzvrrjB3z9uHIc7iPJlWxoa5jr9SQys'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
 const arrows = document.querySelectorAll(".arrow");
 const movieLists = document.querySelectorAll(".movie-list");
// eventlisteners
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  // click event a click event is added to each arrow button
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    // increments the click counter each time the arrow is clicked
    clickCounter++;
    // checks if there are still items left to scroll
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      // helps move elements alongg the x axis(horizontaly)
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      // if no more items are left to scroll return to the initial position
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
 console.log(Math.floor(window.innerWidth / 270));
});
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});