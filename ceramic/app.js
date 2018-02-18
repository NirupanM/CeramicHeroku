

$(document).ready(function() {

'use strict';

// zoom in image


// $('.white-panel').click(function(){


// });

$("#proceed-btn").click(function(){

// var url = "https://nirupanm.github.io/Ceramic/checkout/form-submission.html";

var url ="https://ceramiccollections.herokuapp.com/checkout/form-submission.html";
window.location = url;
window.location.replace (url);

});


$("#form-submit").click(function(){


var cartArray = window.sessionStorage["itemscart"];
    
    var submit_sub_total =0;
    var submit_shipping = 8;
    var submit_total = 0;
    var productString="\nProducts placed for order:";
    var splitString = cartArray.split(",");
    console.log(splitString);
    cartArray = splitString;
    //for (var i = 0; i < cartArray.length; i++) {
      for( var i in cartArray){
      console.log(cartArray[i]+":"+i);  

    //console.log(cartArray[i]+":"+i);
    if(cartArray[i]=="1"){
        productString = productString+"\nProduct Name:Product 1"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }

    if(cartArray[i]=="2"){
        productString = productString+"\nProduct Name:Product 2"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }

    if(cartArray[i]=="3"){
        productString = productString+"\nProduct Name:Product 3"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }

    if(cartArray[i]=="4"){
        productString = productString+"\nProduct Name:Product 4"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }

    if(cartArray[i]=="5"){
        productString = productString+"\nProduct Name:Product 5"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="6"){
        productString = productString+"\nProduct Name:Product 6"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="7"){
        productString = productString+"\nProduct Name:Product 7"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="8"){
        productString = productString+"\nProduct Name:Product 8"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="9"){
        productString = productString+"\nProduct Name:Product 9"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="10"){
        productString = productString+"\nProduct Name:Product 10"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="11"){
        productString = productString+"\nProduct Name:Product 11"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="12"){
        productString = productString+"\nProduct Name:Product 12"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    if(cartArray[i]=="13"){
        productString = productString+"\nProduct Name:Product 13"+"\nPrice:US$25";
        submit_sub_total = submit_sub_total + 25;
    }
    }



     submit_total = submit_sub_total+submit_shipping;


    productString = productString+"\nSub Total: US $"+submit_sub_total;
        productString = productString+"\nShipping: US $"+submit_shipping;
            productString = productString+"\nTotal: US $"+submit_total;



  


var messageString = $('#name_input').val();




$('#mail-message').val("\nCustomer Details:"+"\n"+"Name:"+$('#name_input').val()+"\n"+"Email:"+$('#email_input').val()+"\n"+"Phone:"+$('#phone_input').val()+"\n"+"Address:"+$('#address_input').val()+productString);





/*$('#mail-message').val(('#mail-message').val()+productString);
*/ 


      $.ajax({
    url: "../php-mailer.php",
    type: "POST",
    //data:{'date':$highlighted_date,'time':loan_first_time,'sec_block':loan_sec_time,'third_block':loan_third_time,'user_id':$booked_user_id,'zone':$located_at,'loan_doc_or_rest':$loan_doc_or_rest},
    success: function(data){
        console.log(data);

        //$("#email_confirmation_message").html(data);


    }
   });

//func close
});






    // window.sessionStorage["fieldval"] = field.value;

$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

      var $target = $( event.currentTarget );

      $target.closest( '.btn-group' )
         .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
         .children( '.dropdown-toggle' ).dropdown( 'toggle' );

      return false;

   });


if(window.sessionStorage["clickedFlag"]){

console.log(window.sessionStorage["itemscart"]);
    var cartArray = window.sessionStorage["itemscart"];
    var SubTotal = 0;
    var Shipping = 8;
    var Total = 0;
    var Index =0;
    var splitString = cartArray.split(",");
    console.log(splitString);
    cartArray = splitString;
    //for (var i = 0; i < cartArray.length; i++) {
      for( var i in cartArray){
      console.log(cartArray[i]+":"+i);  

    //console.log(cartArray[i]+":"+i);
    if(cartArray[i]=="1")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #1</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-1' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="2")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    //var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    // var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img checkout-img-test' />";
    var prodImg = "<img src='../ceramicphotos/pic2.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #2</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-2' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
        if(cartArray[i]=="3")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
var prodImg = "<img src='../ceramicphotos/pic3.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #3</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-3' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
        if(cartArray[i]=="4")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
            var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic4.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #4</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-4' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
        if(cartArray[i]=="5")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic5.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #5</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-5' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }

    if(cartArray[i]=="6")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic6.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #6</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-6' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    // var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    // var prodImg = "<img src='../ceramicphotos/pic6.jpg' class='checkout-img' />";
    // var prdTitle = "<strong class='checkout-font-family'>Product #6</strong>";
    // var prdQty = "<strong class='checkout-font-family'>1</strong>";
    // var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    // var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    // var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="7")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic7.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #7</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-7' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="8")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic8.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #8</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-8' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="9")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic9.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #9</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-9' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="10")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic10.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #10</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-10' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="11")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic11.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #11</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-11' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="12")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic12.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #12</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-12' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="13")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodImg = "<img src='../ceramicphotos/pic13.jpg' class='checkout-img checkout-img-test' />";
    var prdTitle = "<div class='checkout-prod-image-title'>Product #13</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    var prdRemove = "<button id='delete-cart-13' type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    }

    // var table = $('table[name="checkout-2"]');
    //     var prodInd = "";
    // var prodImg = "";
    // var prdTitle = "";
    // var prdQty = "";
    // var prdPrice = "";
    // var prdTotalPrice = "<strong class='sub-total-label'>SubTotal</strong>";
    //     var prdRemove = "<strong >US $"+SubTotal+"</strong>";

    // newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

    //     var table = $('table[name="checkout-2"]');
    //     var prodInd = "";
    // var prodImg = "";
    // var prdTitle = "";
    // var prdQty = "";
    // var prdPrice = "";
    // var prdTotalPrice = "<strong class='shipping-label'>Shipping</strong>";
    //     var prdRemove = "<strong >US $"+Shipping+"</strong>";

    // newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

    Total = SubTotal + Shipping;

    $('#sub-total-value').html("US $"+SubTotal);
    $('#shipping-value').html("US $"+Shipping);
    $('#total-value').html("US $"+Total);

    $("#cartSummaryTable").css({"display":"table"});

// var table = $('table[name="checkout-2"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "";
//     var prdTotalPrice = "<strong class='total-label'>Total</strong>";
//     var prdRemove = "<strong >US $"+Total+"</strong>";

//     newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);





}



if(!window.sessionStorage["cartflag"]){
var count = 0;
var items_cart = [];
window.sessionStorage["cartflag"]=true;
window.sessionStorage["count"] = count;
window.sessionStorage["itemscart"] = items_cart;
console.log(window.sessionStorage["itemscart"].length);
//window.sessionStorage["clickedFlag"]=0;
}





$(".cart-section").click(function(){


if(window.sessionStorage["itemscart"].length>0){
     //var url = "file:///C:/github/ceramic/checkout/checkout.html";
    //var url = "https://nirupanm.github.io/Ceramic/checkout/checkout.html";

    var url = "https://ceramiccollections.herokuapp.com/checkout/checkout.html";
window.location = url;
window.location.replace (url);
    // history.pushState({}, "", "file:///C:/github/ceramic/");
    //     history.pushState('checkout', null, 'checkout/checkout.html');
    // history.replaceState(null, null, '/checkout.html');
    window.sessionStorage["clickedFlag"]=true;
    // window.open('checkout/checkout.html', '_blank');
    
    // console.log(window.sessionStorage["itemscart"]);
    // var cartArray = window.sessionStorage["itemscart"];
    // for (var i = 0; i < cartArray.length; i++) {
    // console.log(cartArray[i]);
    // if(cartArray[i]=="1")
    // {
    // var table = $('table[name="checkout"]');
    // var prodInd = "<div>1.</div>";
    // var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img' />";
    // var prdTitle = "<div>Product #1</div>";
    // var prdQty = "<div>1</div>";
    // var prdPrice = "<strong>$25</strong>";
    // var prdTotalPrice = "<strong>$25</strong>";
    // var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    // newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    // }

    
    // }
}


});

var table = $('table[name="checkout"]');

    // var prodInd = "<div class='checkout-index-col'>1)</div>";
    // var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img checkout-img-test' />";
    // var prdTitle = "<div class='checkout-prod-image-title'>Test #1</div><div class='checkout-prod-image-desc'>Product Desc </div>";
    // var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
    // var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
    // var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
    // var prdRemove = "<button type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";

    // newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

// var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img checkout-img-test' />";
//     var prdTitle = "<div class='checkout-prod-image-title'>Test #1</div><div class='checkout-prod-image-desc'>Product Desc </div>";
//     var prdQty = "<div class='checkout-qty-col'>Quantity: 1</div>";
//     var prdPrice = "<div class='checkout-price-col'>Price: US $25</div>";
//     var prdTotalPrice = "<div class='checkout-total-price-col'>Total: US $25</div>";
//     var prdRemove = "<button type='button' class='btn btn-danger checkout-close'><span class='glyphicon glyphicon-remove'></span></button></td>'";

//     newRow(table,[prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

    // var table = $('table[name="checkout"]');
    //     var prodInd = "<div>2.</div>";
    // var prodImg = "<img src='../ceramicphotos/pic2.jpg' class='checkout-img' />";
    // var prdTitle = "<div>Product #2</div>";
    // var prdQty = "<div>1</div>";
    // var prdPrice = "<strong>$25</strong>";
    // var prdTotalPrice = "<strong>$25</strong>";
    //     var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span> </button></td>'";

    // newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);


    // var table = $('table[name="checkout"]');
    //     var prodInd = "<div>2.</div>";
    // var prodImg = "<img src='../ceramicphotos/pic2.jpg' class='checkout-img' />";
    // var prdTitle = "<div>Product #2</div>";
    // var prdQty = "<div>1</div>";
    // var prdPrice = "<strong>$25</strong>";
    // var prdTotalPrice = "<strong>$25</strong>";
    //     var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span> </button></td>'";

    // newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);


//     var table = $('table[name="checkout"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "<h4>SubTotal</h4>";
//     var prdTotalPrice = "<h4>$50</h4>";
//         var prdRemove = "";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

//     var table = $('table[name="checkout"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "<h4>Shipping</h4>";
//     var prdTotalPrice = "<h4>$6.75</h4>";
//         var prdRemove = "";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

// var table = $('table[name="checkout"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "<h4>Total</h4>";
//     var prdTotalPrice = "<h4>$56.75</h4>";
//     var prdRemove = "";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);




//alert("t");



//if(document.getElementById("caption-count")){
document.getElementById("caption-count").innerHTML = window.sessionStorage["count"];
//}


$("#prod-1").click(function(){
    $('#quick_view_1').modal('show');
});


$("#prod-2").click(function () {

    $('#quick_view_2').modal('show');
});
$("#prod-3").click( function () {

    $('#quick_view_3').modal('show');
});
$("#prod-4").click( function () {

    $('#quick_view_4').modal('show');
});
$("#prod-5").click( function () {

    $('#quick_view_5').modal('show');
});
$("#prod-6").click( function () {

    $('#quick_view_6').modal('show');
});
$("#prod-7").click( function () {

    $('#quick_view_7').modal('show');
});
$("#prod-8").click( function () {

    $('#quick_view_8').modal('show');
});
$("#prod-9").click( function () {

    $('#quick_view_9').modal('show');
});
$("#prod-10").click( function () {

    $('#quick_view_10').modal('show');
});
$("#prod-11").click( function () {

    $('#quick_view_11').modal('show');
});
$("#prod-12").click( function () {

    $('#quick_view_12').modal('show');
});
$("#prod-13").click( function () {

    $('#quick_view_13').modal('show');
});



$("#cart-1").click( function () {

    $('#confirm_cart_1').modal('show');
});
$("#cart-2").click( function () {

    $('#confirm_cart_2').modal('show');
});
$("#cart-3").click( function () {

    $('#confirm_cart_3').modal('show');
});
$("#cart-4").click( function () {

    $('#confirm_cart_4').modal('show');
});
$("#cart-5").click( function () {

    $('#confirm_cart_5').modal('show');
});
$("#cart-6").click( function () {

    $('#confirm_cart_6').modal('show');
});
$("#cart-7").click( function () {

    $('#confirm_cart_7').modal('show');
});
$("#cart-8").click( function () {

    $('#confirm_cart_8').modal('show');
});
$("#cart-9").click( function () {

    $('#confirm_cart_9').modal('show');
});
$("#cart-10").click( function () {

    $('#confirm_cart_10').modal('show');
});
$("#cart-11").click( function () {

    $('#confirm_cart_11').modal('show');
});
$("#cart-12").click( function () {

    $('#confirm_cart_12').modal('show');
});
$("#cart-13").click( function () {

    $('#confirm_cart_13').modal('show');
});


$("#cart-1-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("1");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;

});

$("#cart-2-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("2");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-3-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("3");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-4-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("4");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-5-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("5");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-6-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("6");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-7-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("7");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-8-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("8");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-9-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("9");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-10-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("10");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-11-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("11");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-12-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("12");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-13-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("13");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});


$("#add-cart-1").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("1");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;


});

$("#add-cart-2").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("2");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-3").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("3");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-4").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("4");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-5").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("5");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-6").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("6");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-7").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("7");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-8").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("8");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#add-cart-9").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("9");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#add-cart-10").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("10");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#add-cart-11").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("11");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#add-cart-12").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("12");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#add-cart-13").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("13");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});




$("#delete-cart-1").click( function () {
//     var cartArray = window.sessionStorage["itemscart"];
//     console.log(cartArray);

//     if(cartArray.length==1){
//         if (cartArray[0] == 1){
//             cartArray = [];
//         }
//     }
//     else{
//     for (i = 0; i < cartArray.length; i++) {
//   if (cartArray[i] == 1){

//     for (var j = i+1; j < cartArray.length; j++) {
//     cartArray[i] = cartArray[j];
//     i = i + 1;
//     }
//     }  //updated
// }
//}
    // var splitString = cartArray.split(",");
    // console.log(splitString);
    // cartArray = splitString;
    //var index = cartArray.indexOf(1);
    //if (cartArray.indexOf(1) > -1) {
    //cartArray.splice(cartArray.indexOf(1), 1);
    //}

    //Array.prototype.splice(cartArray.indexOf(1),1);

    // console.log(cartArray);
    // window.sessionStorage["itemscart"] = cartArray;

    // window.location.reload();

});

// $("#delete-cart-1").click( function () {

// });

// $("#delete-cart-1").click( function () {

// });

// $("#delete-cart-1").click( function () {

// });

// $("#delete-cart-1").click( function () {

// });

// $("#delete-cart-1").click( function () {

// });

// $("#delete-cart-1").click( function () {

// });
// $("#delete-cart-1").click( function () {

// });
// $("#delete-cart-1").click( function () {

// });
// $("#delete-cart-1").click( function () {

// });
// $("#delete-cart-1").click( function () {

// });
// $("#delete-cart-1").click( function () {

// });
// $("#delete-cart-1").click( function () {

// });





  // define variables
//   var items = document.querySelectorAll(".timeline li");

//   var pdfViewer = new wijmo.viewer.PdfViewer('#pdfViewer', {
//   serviceUrl: 'http://demo.grapecity.com/c1/aspnet/c1webapi/4.0.20172.105/api/pdf/',
//   filePath: 'PdfRoot/従業員別売上.pdf',
//   zoomMode: wijmo.viewer.ZoomMode.PageWidth,
//   thresholdWidth: 0
// });

// document.form.thresholdWidth.addEventListener('click', function (e) {
//   pdfViewer.thresholdWidth = e.target.checked ? 9999 : 0;
// });


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

$('#pinBoot').pinterest_grid({
no_columns: 4,
padding_x: 10,
padding_y: 10,
margin_bottom: 50,
single_column_breakpoint: 700
});
});


;(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 0);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);

function newRow($table,cols){
    $row = $('<tr/>');
    for(i=0; i<cols.length; i++){
        $col = $('<td/>').append(cols[i]);
        $row.append($col);
    }
    $table.append($row);
}

function openCheckout(){
    window.open('checkout/checkout.html', '_blank');
}