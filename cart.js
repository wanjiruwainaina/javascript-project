{
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

     console.log(cartItems)
     const cartCont = document.getElementById("cart-container")
      content = ""
     for(movie of cartItems){
       content +=`
        <div>
            <h1>${movie.title}</h1>
            <h3>${movie.category}</h3>
        </div>
       `
     }

     cartCont.innerHTML = content;
}