function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
function guid() {
    (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();    
}

var url = "http://testearlyadoption.com/?ref=";

$(document).ready(function(){
   $("#signUpBtn").click(function(){
       $("#optin").hide();
       var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();    ;
       $("#fbshare").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + url + guid);
       $("#twshare").attr("href", "https://twitter.com/intent/tweet?text=Evasio+-+alternative+photo+sharing+app&amp;url=" + url + guid);
       $("#url").val(url + guid);
       $("#thankyou").show();
   })
});

