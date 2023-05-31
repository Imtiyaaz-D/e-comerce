
let productListings = document.querySelector(".productListings");
let products = [
    { id: 1,
        Name:"Wooden Braclet",
        Description:"wooden-bracelet-mens-women-s-wood-bracelets",
        Price:"250",
        Image:"https://i.postimg.cc/TwfDK0TT/angiewoodcreationsco-wooden-bracelet-mens-women-s-wood-bracelets-gift-idea-for-him-her-birthday-anni.jpg",
    
    },
    { id: 2,
        Name:"Dark-Sandalwood Watch",
        Description:"not-engraved-angie-wood-creations-dark-sandalwood-men-s-watch-with-teal-dial-wood",
        Price:"400",
        Image:"https://i.postimg.cc/PqmDf9s6/angiewoodcreations-not-engraved-angie-wood-creations-dark-sandalwood-men-s-watch-with-teal-dial-wood.webp",
    
    },
    { id: 3,
        Name:"Glide-Vitaly-G-2 Necklace",
        Description:"Glide-Vitaly-G-2",
        Price:"350",
        Image:"https://i.postimg.cc/Y0SL3S4V/Glide-Vitaly-G-2-1100x.webp",
    
    },
    { id: 4,
        Name:"Kickback-Vitaly-SS-v1 bracelet",
        Description:"Kickback-Vitaly-SS-v1",
        Price:"165",
        Image:"https://i.postimg.cc/wMbybdLB/Kickback-Vitaly-SS-v1-1946x.webp",
    
    },
    { id: 5,
        Name:"omega-sailing-bracelet",
        Description:"omega-sailing-bracelet-in-stainless-steel",
        Price:"150",
        Image:"https://i.postimg.cc/G2KsGDpG/omega-sailing-bracelet-in-stainless-steel-with-dlc-coating-and-black-rubber-accessories-manfredi-jew.webp"
    
    },
]
products.forEach((products)=>{productListings.innerHTML +=`
<div class="card">
<img src="${products.Image}" class="card-img-top" alt="...">
<div class="card-body">${products.Description}
  <h5 class="card-title">${products.Name}</h5>
  <p class="card-text"></p>
</div><p class="lead price">${products.Price}</p>
</div>`})