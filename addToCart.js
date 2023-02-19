//code functionality: when you click on a small img it is displayed on the large img


var imgNum = "1";
var currentSelectedImage = imgNum;

var smallImgElement = document.getElementsByClassName(
  "small-img" + currentSelectedImage
)[0];
console.log(smallImgElement);
smallImgElement.classList.add("active-small-img");


console.log(document.getElementsByClassName("small-img"));

for (var i = 0; i < 4; i++) {
  document
    .getElementsByClassName("small-img")
    [i].addEventListener("click", (e) => {
      document
        .getElementsByClassName("active-small-img")[0]
        .classList.remove("active-small-img");

      imgNum = e.target.classList[0][9];
      console.log(e.target.classList[0]);
      e.target.classList.add("active-small-img");

      document.getElementsByClassName(
        "large-img"
      )[0].style.backgroundImage = `url(images/image-product-${imgNum}.jpg)`;
    });
}




//increment and decrement counter

var counter = 0;

document.getElementById("decrement").addEventListener("click", () =>{
    if(counter > 0){
        counter -= 1;

    }else{
        console.log("Cannot decrement");
    }

    document.getElementById("counter-value").innerHTML = counter;

});

document.getElementById("increment").addEventListener("click", () =>{
    
        counter += 1;

    
    document.getElementById("counter-value").innerHTML = counter;

});

