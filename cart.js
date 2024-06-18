let carts = document.querySelectorAll('.add-cart');
let products=[
    {name: "THE BEEKEEPER",
     incart: 0
    },
    {name: "THE BEEKEEPER",
     incart: 0
    },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       },
       {name: "THE BEEKEEPER",
        incart: 0
       }

];
for(let i=0;i<=carts.length;i++){
    carts[i].addEventListener('click',()=>{
       cartnumbers(products[i]);
    })
} 
function onloadcartnumbers(){
    let productNumbers= localStorage.getItem('cartnumbers')

    if(productNumbers){
        document.querySelector('.cart span').textcontent = productNumbers;
    }
}
function cartnumbers(products){
    let productNumbers=localStorage.getItem('cartnumbers');
    productNumbers= parseInt(productNumbers);

    if( productNumbers){
        localStorage.setItem('cartnumbers',productNumbers +1);
        document.querySelector('.cart span').textcontent = productNumbers + 1;
    }else{
        localStorage.setItem('cartnumbers',1);
        document.querySelector('.cart span').textcontent = 1
    }
    setitems(products);
    
}
function setitems(products){
let cartitems = localStorage.getItem('productsincart')
cartitems= JSON.parse(cartitems);

if(cartitems != null){

    if(cartitems[products.tag] == undefined){
        cartitems = {
            ...cartitems,
            [products.tag] : products
        }
    }
   cartitems[products.tag].incart += 1;
}else
    products.incart = 1;
 cartitems = {
    [products.tag] : products
}
    localStorage.setitem("productsincart", JSON.stringify
        (cartitems));
}
onloadcartnumbers();