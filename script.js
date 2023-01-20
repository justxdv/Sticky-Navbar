window.addEventListener('scroll', function(){
    let scrollvar=document.getElementById("menu");
    if(window.pageYOffset>=200)
    {
        scrollvar.classList.add("sticky");
    }
    else{
        scrollvar.classList.remove("sticky");
    }
})