function apple_plus() {
    var apple = 10;
    var app = document.querySelector("#app-price").value;
    if (app < apple) {
        app++;
        document.querySelector("#app-price").value = app;
        priceapp(app);

    }



}

function apple_minus() {
    var apple = 10;
    var app = document.querySelector("#app-price").value;
    if (app <= apple && app > 0) {
        app--;
        document.querySelector("#app-price").value = app;
        priceapp(app);

    }



}

function orange_plus() {
    var orange = 15;
    var org = document.querySelector("#org-price").value;
    if (org < orange) {
        org++;
        document.querySelector("#org-price").value = org;
        priceorg(org);


    }



}

function orange_minus() {
    var orange = 15;
    var org = document.querySelector("#org-price").value;
    if (org <= orange && org > 0) {
        org--;
        document.querySelector("#org-price").value = org;
        priceorg(org);

    }



}

function ban_plus() {
    var banana = 7;
    var ban = document.querySelector("#ban-price").value;
    if (ban < banana) {
        ban++;
        document.querySelector("#ban-price").value = ban;
        priceban(ban);
    }



}

function ban_minus() {
    var banana = 7;
    var ban = document.querySelector("#ban-price").value;
    if (ban <= banana && ban > 0) {
        ban--;
        document.querySelector("#ban-price").value = ban;

        priceban(ban);
    }



}
var sum = 0;
var price1 = 0;

function priceapp(a) {
    var putmoney = document.querySelector("#put-money").value;
    price1 = a * 10;


    sum = price2 + price1 + price3;



    if (sum <= putmoney) {


        document.querySelector("#owner").value = sum;
    } else {
        alert("sorry you do not have money");
    }

}
var sum2 = 0;
var price2 = 0;

function priceorg(o) {
    var putmoney = document.querySelector("#put-money").value;
    price2 = o * 15;


    sum2 = price1 + price2 + price3;



    if (sum2 <= putmoney) {


        document.querySelector("#owner").value = sum2;
    } else {
        alert("sorry you do not have money");
    }

}
var sum3 = 0;
var price3 = 0;

function priceban(b) {
    var putmoney = document.querySelector("#put-money").value;
    price3 = b * 7;


    sum3 = price2 + price1 + price3;



    if (sum3 <= putmoney) {


        document.querySelector("#owner").value = sum3;
    } else {
        alert("sorry you do not have money");
    }

}