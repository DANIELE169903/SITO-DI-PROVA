const backbutton = document.getElementById('backbutton')

backbutton.addEventListener('click' , function () {
      window.scrollTo(0,0);
});

window.addEventListener('scroll', function() {
    let posy = window.scrollY;
    if(posy > 0) {
        backbutton.style.display = 'block';
    }else{
        backbutton.style.display = 'none'
    }
})