var total_price=0;
var count_apple=0;
var count_orange=0;
var count_ban=0;
var purchase=0;
var total_purchase=0;
function total_amount(){
    total_price=document.querySelector("#put-money").value;
}
function purchasing(){
    document.querySelector("span").innerHTML = total_purchase;
}
function apple_plus(){
    if(total_price >= 10){
        count_apple++;
       
        purchase+=10;
        total_price=total_price-purchase;
        total_purchase=total_purchase+purchase;
        purchase=0;
        document.querySelector("#app-price").value=count_apple;
        purchasing();

    }
    else{
        alert("sorry you do not have maoney to buy apple");
    }

}
function apple_minus(){
    if(total_purchase > 0 && count_apple > 0){
        count_apple--;
       
        purchase+=10;
        total_price=total_price+purchase;
        total_purchase=total_purchase-purchase;
        purchase=0;
        document.querySelector("#app-price").value=count_apple;
        purchasing();

    }
    else{
        alert("sorry you do not have maoney to buy apple");
    }

}
function orange_plus(){
    if(total_price >= 15){
        count_orange++;
       
        purchase+=15;
        total_price=total_price-purchase;
        total_purchase=total_purchase+purchase;
        purchase=0;
        document.querySelector("#org-price").value=count_orange;
        purchasing();

    }
    else{
        alert("sorry you do not have maoney to buy orange");
    }

}
function orange_minus(){
    if(total_purchase > 0 && count_apple > 0){
        count_orange--;
       
        purchase+=15;
        total_price=total_price+purchase;
        total_purchase=total_purchase-purchase;
        purchase=0;
        document.querySelector("#org-price").value=count_orange;
        purchasing();

    }
    else{
        alert("sorry you do not have maoney to buy orange");
    }

}
function ban_plus(){
    if(total_price >= 7){
        count_ban++;
       
        purchase+=7;
        total_price=total_price-purchase;
        total_purchase=total_purchase+purchase;
        purchase=0;
        document.querySelector("#ban-price").value=count_ban;
        purchasing();

    }
    else{
        alert("sorry you do not have maoney to buy banana");
    }

}
function ban_minus(){
    if(total_purchase > 0 && count_apple > 0){
        count_ban--;
       
        purchase+=7;
        total_price=total_price+purchase;
        total_purchase=total_purchase-purchase;
        purchase=0;
        document.querySelector("#ban-price").value=count_ban;
        purchasing();

    }
    else{
        alert("sorry you do not have maoney to buy banana");
    }

}