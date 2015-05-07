$(function(){

  $scrolldown = $(".scrolldown i");
  setInterval(function(){
    $scrolldown.toggleClass("bounce");
  }, 3000);
  
  $('.smoothscroll').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').animate({
          scrollTop: $target.offset().top
      }, 500, function () {
          window.location.hash = target;
      });
  });

  $.getJSON("js/cv.json", function (data) {
    console.log(data);
    $("<p>").text(data.education.university).appendTo(".experience");
    $("<p>").text(data.education.degree).appendTo(".experience");
    $("<p>").text(data.education.grade).appendTo(".experience");

    $.each(data.skills, function (index, skill) {
      $("<p>").text(skill).appendTo(".skills");
    });
  });



});