

document.addEventListener("DOMContentLoaded", (event) => {

let productImage = document.querySelector('.product-img');
let productThumbnailsContainer = document.querySelector('.product-thumbnail-container');
let productDescThumbs = document.querySelectorAll('.product-desc-thumb');
let containers = document.querySelectorAll('.radio-purchase-container, .radio-subs-container, .radio-subs-inner-container');
let decrementBtn = document.getElementById("decrement");
let incrementBtn = document.getElementById("increment");
let quantityValue = document.getElementById("quantity");
let tabOne = document.querySelector('#tab-one');
let tabTwo = document.querySelector('#tab-two');
let tabThree = document.querySelector('#tab-three');

let quantity = 1;

productDescThumbs.forEach(descThumb => {
    descThumb.addEventListener('click', () => {
        const productId = descThumb.getAttribute('data-id'); 
        const product = products[productId]; 

        if (product) {

            document.querySelector('.product-header').textContent = product.name;
            document.querySelector('.product-quant-subheader').textContent = product.subheader;
            document.querySelector('.product-review-txt').textContent = product.reviews;
            document.querySelector('.product-thumb-name').textContent = product.name;
            document.querySelector('.product-details').textContent = product.details;
            document.querySelector('.radio-purchase-container .product-pricing').textContent = product.price;
            document.querySelector('.final-price').textContent = product.subsPrice;

            productImage.src = product.img;
            productThumbnailsContainer.innerHTML = '';
            product.thumbnails.forEach(thumbnailSrc => {
                const thumbnail = document.createElement('img');
                thumbnail.src = thumbnailSrc;
                thumbnail.alt = product.name;
                thumbnail.classList.add('product-thumbnail');
                thumbnail.addEventListener('click', () => {
                    productImage.src = thumbnailSrc;
                });
                productThumbnailsContainer.appendChild(thumbnail);
            });
        }
    });
});


containers.forEach(container => {
    container.addEventListener('click', () => {
        containers.forEach(c => c.classList.remove('active'));
        container.classList.add('active');
    });
});

    incrementBtn.addEventListener("click", () => {
        quantity++;
        updateQuantity();
    });

    decrementBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            updateQuantity();
        }
    });

    const updateQuantity = () => {
        quantityValue.textContent = quantity;
        decrementBtn.disabled = quantity <= 1;
    };


    tabOne.addEventListener('click', () => {
        document.querySelector('.info-tab-content-one').style.zIndex = "100";
        document.querySelector('.info-tab-content-two').style.zIndex = "99";
        document.querySelector('.info-tab-content-three').style.zIndex = "99";

    });

    tabTwo.addEventListener('click', () => {
        document.querySelector('.info-tab-content-one').style.zIndex = "99";
        document.querySelector('.info-tab-content-two').style.zIndex = "100";
        document.querySelector('.info-tab-content-three').style.zIndex = "99";
    });

    tabThree.addEventListener('click', () => {
        document.querySelector('.info-tab-content-three').style.zIndex = "99";
        document.querySelector('.info-tab-content-three').style.zIndex = "99";
        document.querySelector('.info-tab-content-three').style.zIndex = "100";
    });





new Splide('#splide', {
    type: 'loop',
    perPage: 4,
    pagination: true,
    breakpoints: {
        1024: {
            perPage: 2,
           
          },
          767: {
            perPage: 2,
        
          },
          640: {
            perPage: 1,
      
          },
    }
  }).mount();


new Splide('#splide2', {
    type: 'loop',
    perPage: 6,
    pagination: false,
    breakpoints: {
        1024: {
            perPage: 2,
           
          },
          767: {
            perPage: 2,
        
          },
          640: {
            perPage: 1,
      
          },
    }
  }).mount();


const products = {
  1: {
      id: 1,
      name: "BANANA BLISS",
      subheader: "12 CANS",
      reviews: "51 reviews",
      details: "Our fab collab with Nymphia Wind features sweet banana puree, decadent vanilla bean, and fresh brewed marigold flowers. Banana cream for the Banana Queen is a toast to Asian heritage and a celebration of this iconic yellow fruit.",
      ingredients: "Fresh Brewed Marigold* (Filtered Water, Marigold Flowers*), Banana Puree, Agave Nectar*, Jerusalem Artichoke*, Lime Juice*, Mango Puree*, Banana Cream Flavor*, Chicory Root Inulin, Vanilla Extract*, Alaea Sea Salt, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 3,690.93",
      subsPrice: "Rs. 2,135.34",
      img: "images/Banana_1.webp",
      thumbnails: [
          "images/Banana_1.webp",
          "images/Banana_2.webp",
          "images/Banana_4.webp"
      ]
  },
  2: {
      id: 2,
      name: "RASPBERRY LYCHEE",
      subheader: "12 CANS",
      reviews: "80 Reviews",
      details: "Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.",
      ingredients: "Fresh Brewed Marigold* (Filtered Water, Marigold Flowers*), Banana Puree, Agave Nectar*, Jerusalem Artichoke*, Lime Juice*, Mango Puree*, Banana Cream Flavor*, Chicory Root Inulin, Vanilla Extract*, Alaea Sea Salt, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 3,690.93",
      subsPrice: "Rs. 3,545.34",
      img: "images/Raspberry_1.webp",
      thumbnails: [
          "images/Raspberry_1webp.webp",
          "images/Raspberry_2.webp",
          "images/Raspberry_3.webp"
      ]
  },
  3: {
      id: 3,
      name: "STRAWBERRY PASSION",
      subheader: "12 CANS",
      reviews: "138 Reviews",
      details: "Ripe strawberries and tart passion fruit meet freshly brewed hibiscus flowers for a sweet and tropical refresher.",
      ingredients: "Fresh Brewed Hibiscus* (Filtered Water, Hibiscus Flowers*), Strawberry Juice*, Passion Fruit Juice*, Agave Nectar*, Jerusalem Artichoke*, Strawberry Flavor*, Chicory Root Inulin, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 4,690.93",
      subsPrice: "Rs. 2,453.54",
      img: "images/Strawberry_1.webp",
      thumbnails: [
          "images/Strawberry_1.webp",
          "images/Strawberry_2.webp",
          "images/Strawberry_3.webp"
      ]
  },
  4: {
      id: 4,
      name: "GUAVA ROSE",
      subheader: "12 CANS",
      reviews: "90 Reviews",
      details: "Tropical pink guava, freshly brewed rose petals, and soothing elderberry for a fruity and floral pink drink.",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 3,660.93",
      subsPrice: "Rs. 2,986.34",
      img: "images/Guava_1.webp",
      thumbnails: [
          "images/Guava_1.webp",
          "images/Guava_2.webp",
          "images/Guava_3.webp"
      ]
  },
  5: {
      id: 5,
      name: "PINEAPPLE PARADISE",
      subheader: "12 CANS",
      reviews: "93 Reviews",
      details: "Sun-kissed pineapple, zesty lime, and citrusy tangerine juice for a poolside getaway in a can. A light twist of Sichuan peppercorn rounds out this tropical flavor with a warm hint of spice.",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 3,690.93",
      subsPrice: "Rs. 1,632.43",
      img: "images/Pineapple_1.webp",
      thumbnails: [
          "images/Pineapple_1.webp",
          "images/Pineapple_2.webp",
          "images/Pineapple_3.webp"
      ]
  },
  6: {
      id: 6,
      name: "MANGO GOLD",
      subheader: "12 CANS",
      reviews: "90 Reviews",
      details: "Sweet sun-ripened mangos balanced with fresh brewed turmeric root and tart passion fruit in this tropical refresher.",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 6,660.93",
      subsPrice: "Rs. 5,167.29",
      img: "images/Mango_1.webp",
      thumbnails: [
          "images/Mango_1.webp",
          "images/Mango_2.webp",
          "images/Mango_3.webp"
      ]
  },
  7: {
      id: 7,
      name: "PEACH GINGER",
      subheader: "12 CANS",
      reviews: "70 Reviews",
      details: "Tropical pink guava, freshly brewed rose petals, and soothing elderberry for a fruity and floral pink drink.",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 8,670.65",
      subsPrice: "Rs. 6,568.65",
      img: "images/Peach_1.webp",
      thumbnails: [
          "images/Peach_1.webp",
          "images/Peach_2.webp",
          "images/Peach_3.webp"
      ]
  },
  8: {
      id: 8,
      name: "SHARK TANK BUNDLE",
      subheader: "24 PACK",
      reviews: "580 Reviews",
      details: "Try our Shark-Tank featured flavors that had all the Sharks raving... and landed us a deal! Includes 4 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger Discount applied at check out. One promo per order.",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 6,667.93",
      subsPrice: "Rs. 4,437.29",
      img: "images/SharkTank1.webp",
      thumbnails: [
          "images/SharkTank1.webp",
          "images/SharkTank2.webp",
          "images/SharkTank3.webp"
      ]
  },
  9: {
      id: 9,
      name: "VERIETY PACK",
      subheader: "12 CANS",
      reviews: "40 Reviews",
      details: "Can't decide on just one flavor? Experience all 6 prebiotic + probiotics flavors and all their gut friendly benefits! Includes 2 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger.",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 5,660.93",
      subsPrice: "Rs. 4,167.29",
      img: "images/Variety_Pack1.webp",
      thumbnails: [
          "images/Variety_Pack1.webp",
          "images/Variety_Pack2.webp",
          "images/Variety_Pack3.webp"
      ]
  },
  10: {
      id: 10,
      name: "BOTANICAL BOUQUET",
      subheader: "12 CANS",
      reviews: "90 Reviews",
      details: "A delightful dozen featuring our bestselling floral and fruity favorites. Includes 4 cans of each: Raspberry Lychee, Guava Rose, Strawberry Passion",
      ingredients: "Fresh Brewed Rose Petals* (Filtered Water, Rose Petals*), Guava Puree*, Agave Nectar*, Lemon Juice*, Jerusalem Artichoke*, Rose Flavor*, Chicory Root Inulin, Guava Flavor*, Elderberry Juice Concentrate*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis) (*organic)",
      price: "Rs. 5,456.67",
      subsPrice: "Rs. 4,567.43",
      img: "images/BotanicalBundle1.webp",
      thumbnails: [
          "images/BotanicalBundle1.webp",
          "images/BotanicalBouquet2.webp",
          "images/BotanicalBouquet3.webp"
      ]
  },
};

}
)