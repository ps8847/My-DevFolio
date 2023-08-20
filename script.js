$(document).ready(function() {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });


  // scroll up btn
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // tyoing animation

  var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Freelancer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["Web Designer", "Web Developer", "Freelancer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // toggle menu navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // owl crousel script

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});



const copyrightyear = document.getElementById("copyrightyear");

let date = new Date();
const year = date.getFullYear();

copyrightyear.innerText = year;

const age = document.getElementById("age");
let agestr = year.toString();
let ans = agestr.substring(2);
age.innerText = ans;

    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        const dateRange = item.querySelector('.experience-date').textContent.split(' - ');
        const startDate = new Date(dateRange[0]);
        const endDate = new Date(dateRange[1]);
        const today = new Date();

        const totalDuration = endDate - startDate;
        const elapsedDuration = today - startDate;

        const progressPercentage = (elapsedDuration / totalDuration) * 100;
        const progressBar = item.querySelector('.progress');
        progressBar.style.width = progressPercentage + '%';
    });
