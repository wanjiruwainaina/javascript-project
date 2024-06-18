
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

function addToCart(movieTitle) {
  
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  console.log(cartItems)


  const existingItem = cartItems.find(item => item.title === movieTitle);
  if (existingItem) {
      alert('This movie is already in your cart!');
      return;
  }
  let movie = null;
  for (let category of ['newrelease', 'horror', 'series', 'action', 'romance']) {
      for (let item of document.getElementById(category).querySelectorAll('.movie-list-item')) {
          if (item.querySelector('.movie-list-item-title').textContent === movieTitle) {
              movie = {
                  title: movieTitle,
                  category: category
              };
              break;
          }
      }
      if (movie) break;
  }

  
  cartItems.push(movie);

  
  localStorage.setItem('cart', JSON.stringify(cartItems));

  
  alert('Movie added to cart!');
}


document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.movie-list-item-button');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          let movieTitle = this.parentNode.querySelector('.movie-list-item-title').textContent;
          addToCart(movieTitle);
      });
  });
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