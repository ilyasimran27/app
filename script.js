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
function plus(button){
    
    if(total_price >= 10 && button.id==1){
        count_apple++;
       
        purchase+=10;
        total_price=total_price-purchase;
        total_purchase=total_purchase+purchase;
        purchase=0;
        document.querySelector("#app-price").value=count_apple;
        purchasing();
        

    }
    else if(button.id==1){
        alert("sorry you do not have maoney to buy apple");
    }
    if(total_price >= 15 && button.id==2){
        count_orange++;
       
        purchase+=15;
        total_price=total_price-purchase;
        total_purchase=total_purchase+purchase;
        purchase=0;
        document.querySelector("#org-price").value=count_orange;
        purchasing();

    }
    else if(button.id==2){
        alert("sorry you do not have maoney to buy orange");
    }
    if(total_price >= 7 && button.id==3){
        count_ban++;
       
        purchase+=7;
        total_price=total_price-purchase;
        total_purchase=total_purchase+purchase;
        purchase=0;
        document.querySelector("#ban-price").value=count_ban;
        purchasing();

    }
    else if(button.id==3){
        alert("sorry you do not have maoney to buy banana");
    }

}
function minus(button){
    if(total_purchase > 0 && count_apple > 0 && button.id==-1){
        count_apple--;
       
        purchase+=10;
        total_price=total_price+purchase;
        total_purchase=total_purchase-purchase;
        purchase=0;
        document.querySelector("#app-price").value=count_apple;
        purchasing();

    }
    else if(button.id==-1){
        alert("sorry you do not have maoney to buy apple");
    }
    if(total_purchase > 0 && count_orange > 0 && button.id==-2){
        count_orange--;
       
        purchase+=15;
        total_price=total_price+purchase;
        total_purchase=total_purchase-purchase;
        purchase=0;
        document.querySelector("#org-price").value=count_orange;
        purchasing();

    }
    else if(button.id==-2){
        alert("sorry you do not have maoney to buy orange");
    }
    if(total_purchase > 0 && count_ban > 0 && button.id==-3){
        count_ban--;
       
        purchase+=7;
        total_price=total_price+purchase;
        total_purchase=total_purchase-purchase;
        purchase=0;
        document.querySelector("#ban-price").value=count_ban;
        purchasing();

    }
    else if(button.id==-3){
        alert("sorry you do not have maoney to buy banana");
    }
    

}



