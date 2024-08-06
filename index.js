function clock (){
    var date = new Date();
    document.getElementById("hours").innerHTML=date.getHours();
    document.getElementById("minutes").innerHTML=date.getMinutes();
    document.getElementById("secunds").innerHTML=date.getSeconds();

}
setInterval (clock, 1000);