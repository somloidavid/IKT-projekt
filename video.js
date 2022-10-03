function videoelo(source){
    var ifr = document.getElementsByClassName("video") 
    // console.log(ifr)
    ifr[0].src = "https://www.youtube.com/embed/"+source;
    var vidc = document.getElementsByClassName("vidcontainer") 
    if (source == 'GtL1huin9EE') {
        ifr[0].src = "https://www.youtube.com/embed/"+source+"?autoplay=1";
    }
    vidc[0].style.opacity = 1;
    vidc[0].style.scale=1;
    // console.log(vidc[0])
    var nav = document.getElementsByClassName("navbar") 
    nav[0].style.opacity = 0;
    nav[0].style.scale= 0;
    var bcon = document.getElementsByClassName("bcon") 
    bcon[0].style.scale= 1;
}
function closevid(){

    var vidc = document.getElementsByClassName("vidcontainer") 
    vidc[0].style.opacity = 0;
    vidc[0].style.scale =0;
    // console.log(vidc[0])
    var nav = document.getElementsByClassName("navbar") 
    nav[0].style.opacity = 1;
    nav[0].style.scale= 1;
    var bcon = document.getElementsByClassName("bcon") 
    bcon[0].style.scale= 0;
    var ifr = document.getElementsByClassName("video") 
    ifr[0].src = "";
   
}
