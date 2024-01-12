const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });


  
  var slideIndex = [1,1,1,1,1,1,1];
  var slideId = ["mySlides1", "mySlides2", 'mySlides3', 'mySlides4', 'mySlides5', 'mySlides6', 'mySlides7']
  showDivs(1, 0);
  showDivs(1, 1);
  showDivs(1, 2);
  showDivs(1, 3);
  showDivs(1, 4);
  showDivs(1, 5);
  showDivs(1, 6);
  function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
  }
  
  function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }