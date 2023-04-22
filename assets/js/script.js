/* Author: Reshma Lihe */


const btn = document.querySelector(".color__mode");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});


// --------------menu show--------------------------
const showMenu = (toogleId, navId) => {
  const toggle = document.getElementById(toogleId),
  nav = document.getElementById(navId)

  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      document.querySelector('html').classList.toggle('no-scroll');
    });
  }
}
showMenu('nav-toggle', 'nav-menu');


// ------------------------------------------

$(".projects-category ul").click(function() {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".projects-category ul li a").click(function() {

  var selected_value = $(this).html();
  var first_li = $(".projects-category ul li:first-child a").html();

  $(".projects-category ul li:first-child a").html(selected_value);
  $(this).html(first_li);
  $(".projects-category ul").removeClass("open");
});

$(document).mouseup(function(event) {

  var target = event.target;
  var select = $(".projects-category ul");

  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }

});


// -------------------------------

jQuery(document).ready(function($) {	  
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);	
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });				
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});

// function fixedNav() {
//   if (window.scrollY != navTop) {    
//     nav.classList.add('fixed');
//   } else {
//     nav.classList.remove('fixed');    
//   }
// }

// window.addEventListener('scroll', fixedNav);




jQuery(document).ready(function($) {
  $('.projects__container').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

jQuery(document).ready(function($) {
  $('a#filter-a').click(function() {
    //hide all works by default 
    $(".projects__img").addClass('filter-hide');
    //show slected works based on the menu clicked
    $(".projects__img[data-filter='"+$(this).attr('data-filter')+"']").removeClass("filter-hide");
    //remove selected class to the link      
    $('a#filter-a').removeClass('selected');
    //add selected class to the active link
    $(this).addClass('selected');
    return false;
   });
   //show all works for "all" menu
  $('a[data-filter="*"]').click(function(event) {    
     $(".projects__img").removeClass('filter-hide');
     return false;
  });
});