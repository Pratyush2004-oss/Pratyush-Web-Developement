var menu=document.querySelector(".icon");
var sidebar=document.querySelector(".sidebar");
var ancer=document.querySelector(".ancer")

menu.addEventListener("click",function(){
    sidebar.style.display="block";
    ancer.style.opacity=0
})
var close=document.querySelector(".icn");
close.addEventListener("click",function(){
    sidebar.style.display="none"
    ancer.style.opacity=1
    
})