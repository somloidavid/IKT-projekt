function videoelo(source){
    var ifr = document.getElementsByClassName("video") 
    console.log(ifr)
    ifr[0].src = "https://www.youtube.com/embed/"+source;
    var vidc = document.getElementsByClassName("vidcontainer") 
    vidc[0].style.opacity = 1;
    vidc[0].style.scale=1;
    console.log(vidc[0])
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
    console.log(vidc[0])
    var nav = document.getElementsByClassName("navbar") 
    nav[0].style.opacity = 1;
    nav[0].style.scale= 1;
    var bcon = document.getElementsByClassName("bcon") 
    bcon[0].style.scale= 0;
   
}
// const EscapeListen = React.createClass({
//     handleKeyDown: function(e) {
//       if (e.keyCode === 27) {
//         console.log('You pressed the escape key!')
//       }
//     },
  
//     render: function() {
//       return (
//         <input type='text'
//                onKeyDown={this.handleKeyDown} />
//       )
//     }
//   })