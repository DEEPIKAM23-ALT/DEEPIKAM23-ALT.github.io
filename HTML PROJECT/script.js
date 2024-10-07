
var popup=document.queryselector(".overlay")
var overlay=document.queryselector(".popup")
var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
popuplay.style.diplay="block"
popup.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
event.preventDefault()
popuplay.style.diplay="none"
popup.style.display=""
})
