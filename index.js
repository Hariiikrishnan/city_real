
var rightHead = document.getElementsByClassName("rightHead");
// var leftHead = document.getElementsByClassName("rightHead");

console.log(rightHead);
function removeOpacity(element){
    console.log(element)
    element.classList.remove("noOpacity");
    console.log(element);
}

// setInterval(()=>{
//     // removeOpacity(rightHead);
//     rightHead.style.opacity = 1;
// },1000);

setInterval(() => {
    rightHead[0].classList.remove("noOpacity");
    rightHead[1].classList.remove("noOpacity");
    rightHead[2].classList.remove("noOpacity");
  }, 1100);