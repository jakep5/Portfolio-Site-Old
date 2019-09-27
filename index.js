$(document).ready(function() {
    $("a.scroll-down").on("click", function(e) {
      e.preventDefault();
      $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
      }, 600);
    });
  });

$(document).ready(function() {
  $("a.scroll-downBio").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
  });
});

/* $("a.scroll-down").click(function() {
    $("div.mainWrapper").animate({
        scrollTop: $("div.bioWrapper").offset().top
    }, 2000);
});
 */
/* function initializePage() {
}

$(initializePage()); */