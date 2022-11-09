var imgURLArr : string[] = [
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg",
    "https://ueh.org.in/wp-content/uploads/2019/08/lotus-temple.jpg",
    "https://mytripsto-india.com/explore-india/india-images/images-kerala/destinations/kerala-view.jpg",
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Places-near-Alleppey.jpg",
    "https://i0.wp.com/www.bongparrot.com/wp-content/uploads/2020/03/IMG_20191226_103507-01-scaled.jpg?fit=892%2C668&ssl=1",
    "https://m.economictimes.com/thumb/height-450,width-600,imgsize-253388,msid-63028784/plan-a-visit-to-thanjavur-to-experience-the-chola-grandeur.jpg",
    "https://www.tamilnadutourisminfo.com/wp-content/uploads/2019/03/Kutralam_Main_Falls.jpg",
    "https://www.holidify.com/images/compressed/2492.JPG",
    "https://www.holidify.com/images/bgImages/TUTICORIN.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/2496_20190221105844jpg",
]
var captionArr : string[] = [
    "Best place in India",
    "amet consectetur adipisicing elit. Esse quisquam atque itaque libero. Aliquid odit eligendi veniam perferendis quisquam exercitationem, voluptatibus tempora amet a animi ab, blanditiis, accusantium veritatis saepe!",
    "consectetur ipsum dolor sit amet  adipisicing elit. Eum, ipsam?",
    "ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo odio architecto. Earum molestias, itaque ut exercitationem eaque quasi illum. Odit maiores necessitatibus cumque tempora quaerat esse. Ad, doloribus iusto!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo laudantium animi dolorum expedita ipsa fuga, facere, voluptatibus saepe voluptates numquam dicta, atque earum assumenda porro.",
    "Fugiat nemo odio architecto. Earum molestias, itaque ut exercitationem eaque quasi illum. Odit maiores necessitatibus cumque tempora quaerat esse. Ad, doloribus iusto!",
    "Quo laudantium animi dolorum expedita ipsa fuga, facere, voluptatibus saepe voluptates numquam dicta, atque earum assumenda porro.",
    "Earum molestias, itaque ut exercitationem eaque quasi illum. Odit maiores necessitatibus cumque tempora quaerat esse. Ad, doloribus iusto!",
    "dolor sit amet consectetur adipisicing elit. Eum, ipsam?",
    "ipsum dolor sit, amet consectetur adipisicing elit. Esse quisquam atque itaque libero. Aliquid odit eligendi veniam perferendis quisquam exercitationem, voluptatibus tempora amet",
    "laudantium animi dolorum expedita ipsa fuga, facere, voluptatibus",
]

var slideNo :number = 0;

function NextSlide(){
    if(slideNo > 9){
        slideNo = 0;
    }else{
        slideNo+=1;
    }
    SlideShow();
}

function PreviousSlide(){
    if(slideNo <= 0){
        slideNo = 10;
    }else{
        slideNo-=1;
    }
    SlideShow();
}

function SlideShow(){
    console.log(slideNo);
    document.getElementById('slide_img').src = imgURLArr[slideNo];
    document.getElementById('captionId').innerHTML = captionArr[slideNo];
}
SlideShow();
