
var trailer = document.getElementById("trailler1");

function clicou(){
    
    document.getElementById("container2").style.display="none";
    document.getElementById("trailler1").style.display="block";
    document.getElementById("icon").style.display="block";
}


function fecharVideo(){
    document.getElementById("container2").style.display="block";
    document.getElementById("trailler1").style.display="none";
    document.getElementById("icon").style.display="none";
    trailer.pause();
}