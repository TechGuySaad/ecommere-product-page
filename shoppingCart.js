var visible = 0; // 0 =hidden
var hoverFill = "#1D2026";
var nonHoverFill = "rgba(105, 112, 125, 1)";
var addedToCart = 0; //0 means btn not yet pressed, 1 means btn is pressed once

document.getElementsByClassName("btn")[0].addEventListener("click",() => {

    if(counter > 0){
        addedToCart = 1;
    }

});





document.getElementsByClassName("nav-cart")[0].addEventListener("click",(e) =>{
    if(visible == 0){
        visible = 1;
        document.getElementsByClassName("nav-cart")[0].style.fill = hoverFill;
        
        document.getElementsByClassName("shopping-cart")[0].style.visibility = "visible";
        if(addedToCart == 1){
            document.getElementsByClassName("total-items")[0].innerHTML = counter;
            document.getElementsByClassName("total-price")[0].innerHTML = (`$ ${counter * 125.00}`);
            document.getElementsByClassName("cart-empty")[0].style.display = "none";

            document.getElementsByClassName("checkout")[0].style.visibility = "visible";

            
        }

        
       


        

    }else{
        visible = 0;
        document.getElementsByClassName("nav-cart")[0].style.fill = nonHoverFill;

        document.getElementsByClassName("shopping-cart")[0].style.visibility = "hidden";

        document.getElementsByClassName("checkout")[0].style.visibility = "hidden";


    }
    
    // if(e.target)

});


document.getElementsByClassName("delete-icon")[0].addEventListener("click",() =>{
    addedToCart = 0;
    document.getElementsByClassName("checkout")[0].style.visibility = "hidden";
    document.getElementsByClassName("cart-empty")[0].style.display = "block";

});


