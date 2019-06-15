function apple_plus(){
    var apple=10;
    var app = document.querySelector("#app-price").value;
    if(app<apple){
        app++;
        document.querySelector("#app-price").value=app;
        price(app);
    }
   


}
function apple_minus(){
    var apple=10;
    var app = document.querySelector("#app-price").value;
    if(app<=apple && app>0) {
        app--;
        document.querySelector("#app-price").value=app;
        price(app);
        
    }
   


}
function orange_plus(){
    var orange=15;
    var org = document.querySelector("#org-price").value;
    if(org<orange){
        org++;
        document.querySelector("#org-price").value=org;
        price20(org);
        
      
    }
   


}
function orange_minus(){
    var orange=15;
    var org = document.querySelector("#org-price").value;
    if(org<=orange && org>0){
        org--;
        document.querySelector("#org-price").value=org;
        price20(org);
       
    }
   


}
var sum=0;
var price1=0;
function price(a){
    var putmoney=document.querySelector("#put-money").value;
     price1=a*10;
    
   
    sum=sum2+price1;
     
    
    
   if(sum<putmoney)
   {
      

       document.querySelector("#owner").value=sum;
   }
   else{
       alert("sorry you do not have money");
   }
    
    }
  var sum2=0;  
var price2=0;
function price20(o){
    var putmoney=document.querySelector("#put-money").value;
     price2=o*15;
    
   
    sum2=price1+price2;
     
    
    
   if(sum2<putmoney)
   {
      

       document.querySelector("#owner").value=sum2;
   }
   else{
       alert("sorry you do not have money");
   }
    
    }