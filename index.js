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

$(document).ready(function() {
  $("a.scroll-downSkills").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
  });
});

$(document).ready(function() {
  $("a.scroll-downProjects").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
  });
});

$(document).ready(function() {
  $("a.scroll-downTop").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
  });
});

$(document).ready(function() {
  $("#contactInfo").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ 
      scrollTop: $("div.contactInfoWrapper").offset().top 
    }, 600);
  });
});


$(document).ready(function() {
  $("#github").click(function() {
    window.open("https://github.com/jakep5/", "_blank");
  })
});

$(document).ready(function() {
  $("#email").click(function() {
    window.location.href = "mailto:jakepagel1@yahoo.com";
  })
});

$(document).ready(function() {
  $("#linkedIn").click(function() {
    window.open("https://www.linkedin.com/in/jake-pagel-38b243191/", "_blank");
  })
});


function initializePage() {
}

$(initializePage());