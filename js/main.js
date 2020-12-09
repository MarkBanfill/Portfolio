(function($){

  $('<div class="screen-wipe"></div>').appendTo('body');

  $(window).on("load", function() {
    $('#backgrounds > *:first-child').addClass('active');
    $('body').show();
    // Screen wipe animation
    $('.screen-wipe').css('animation','slide-down-hide .5s ease-out forwards');
  });

  $(document).ready(function() {
    var urlPath = window.location.pathname;
    urlPath.match(/\/(.*?)(\+|$)/)[1].toLowerCase();
    var lastSlash = urlPath.lastIndexOf("/");
    var pageName = urlPath.substring(lastSlash+1);
    var pageIndex = location.hash.replace( /^#/, '' );

    // Add class to body
    $(document.body).addClass(pageName);
    // If body has no class its propably the homepage
    $('body:not([class])').addClass('home');

    // If homepage slow down video
    if (pageIndex == 0 && urlPath == '/markbanfill/') {
      document.querySelector('#video-container video').playbackRate = 0.5;
    }

    // Highlight active menu item
    var navLinks = $('#menu a');
    navLinks.each(function() {
      var link = $(this);
      var lastSlashInLink = link.attr('href').lastIndexOf("/");
      var linkName = link.attr('href').substring(lastSlashInLink+1);
      if (linkName == pageName) {
        link.addClass('active');
      }
    });

    // Go through any sentence with animate-letters class and wrap each letter with a span
    function setUpLetters() {
      var $letters = $('.animate-letters');
      $letters.each(function() {
        var $letter = $(this);
        var newContent = '';
        for (i = 0; i < $letter.text().length; i++) {
          var substring = $letter.text().substr(i, 1);
          if (substring != " ") {
            newContent += '<span aria-hidden="true">' + substring + '</span>';
          } else {
            newContent += substring;
          }
        }
        $letter.html(newContent);
      });
    }
    setUpLetters();

    $('#main section:first-of-type').addClass('active');

    setColours(pageIndex);
  });

  $('a').click(function() {
  	// If inside certain sections do nothing
  	if($(this).attr('target') == '_blank') {
  		return;
  	}
  	if($(this).closest('#introduction, #experience, #development, #portfolio, #last-next-container').length) {
  		return;
  	}
    // Portfolio screenshots
    if($(this).hasClass('view-image')) {
      var fullImage = $(this).attr('href').split('.').shift() + '-full.' + $('#preview img').attr('src').split('.').pop();
      $('#preview img').attr('src', fullImage);
      $('#preview').css('z-index', '9');
      $('#container').addClass('pushback');
      $('#preview div.frame').css('animation', 'slide-up-show .5s ease-out .7s forwards');
      setTimeout(function() {$('a.close').show()}, 500);
      return false;
    }
    if($(this).hasClass('close')) {
      setTimeout(function() {$('#preview').css('z-index', '-1')}, 2000);
      setTimeout(function() {$('#container').removeClass('pushback')}, 400);
      $('#preview div.frame').css('animation', 'slide-down-hide .5s ease-out 0s forwards');
      $('a.close').hide();
      $('#preview').removeClass('open');
      return false;
    }
  	// Else do screen wipe animation and change page
  	var href = $(this).attr('href');
  	setTimeout(function() {window.location = href}, 500);
  	$('.screen-wipe').css('animation','slide-down-show .5s ease-out forwards');
  	return false;
  });

  // Hamburger nav menu
  $('#menu-toggle').click(function(){
    $('nav').toggleClass('open');
    var navSpans = $('#menu-toggle span');
    var i = -1;
    if ( $('nav').hasClass('open') ) {
      while (i++ < navSpans.length -1) {
        navSpans[i].style.backgroundColor = '#fff';
      }
      $('#logo a span').css('color', '#fff');
      $('#logo').css('border-color', '#ff0');
    } else {
      var pageNo = parseInt($('#page-title').text().substring(0, 3)) - 1;
      var pages = $('#main section');
      var navColour = pages.eq(pageNo).attr('data-navcolour');
      while (i++ < navSpans.length -1) {
        navSpans[i].style.backgroundColor = '#' + navColour;
      }
      var pageIndex = location.hash.replace( /^#/, '' );
      setColours(pageIndex);
    }
  });

  // Start fullPageScrollPureJS
  new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "right",
    animateTime: 0.7,
    animateFunction: "ease",
  });

  $(window).on('hashchange', function(event){
    var pageIndex = Number(location.hash.replace( /^#/, '' ));
    var pageURL = location.pathname;
    var lastURL = event.originalEvent.oldURL;
    var lastIndex = 0;
    if (lastURL.lastIndexOf('#') > 0) {
      lastIndex = Number(lastURL.substring(lastURL.lastIndexOf('#') + 1));
    }
    var sections = $('#main section');
    var sectionId = sections[pageIndex].getAttribute('id');

    // Change background and section label
    var imageNo = 1;
    $('#backgrounds').children().each(function() {
      var $image = $(this);
      if (imageNo == pageIndex + 1) {
        $image.removeClass('lastactive');
        $image.addClass('active');
      } else if (imageNo == +lastIndex + 1) {
        $image.removeClass('active');
        $image.addClass('lastactive');
        // Make last active background invisible after just under a second
        setTimeout(function() {$image.removeClass('lastactive')}, 800);
      } else {
        $image.removeClass('active');
        $image.removeClass('lastactive');
      }
      imageNo++;
    });
    // Change section label (need to remove element then re-insert to re-run animation)
    var el = $('#section-label');
    el.before( el.clone(true) ).remove();
    $('#section-label').html(sectionId);

    // Update page no
    var pageTitle = sections[pageIndex].getAttribute('data-title');
    if (pageIndex > 0) {
      $('#page-title').html(pageIndex.toString().padStart(2, '0') + '<span>&nbsp;&nbsp;' + pageTitle + '.</span>');
      $('#page-title').css('transform','translate3d(0, 0, 0)');
      $('#page-title').css('opacity','1');
    } else {
      $('#page-title').css('transform','translate3d(0, -20vh, 0)');
      $('#page-title').css('opacity','0');
    }

    // Animate direction arrow
    if (pageIndex < lastIndex) {
      $('#up-arrow').css('animation','up-arrow 1s ease-out');
      setTimeout(function() { $('#up-arrow').css('animation','none') }, 1000);
    }
    if (pageIndex > lastIndex) {
      $('#down-arrow').css('animation','down-arrow 1s ease-out');
      setTimeout(function() { $('#down-arrow').css('animation','none') }, 1000);
    }

    setColours(pageIndex);
  });

  function setColours(pageIndex) {
    // Change colours
    var sections = $('#main section');
    var navColour = sections[pageIndex].getAttribute('data-navcolour');
    var lineColour = sections[pageIndex].getAttribute('data-linecolour');
    $('#logo a span').css('color', '#' + navColour);
    $('#logo, #page-title span').css('border-color', '#' + lineColour);
    $('.dots li a').css('background', 'linear-gradient(#' + navColour + ', #' + navColour + ') no-repeat left center / 60% 2px')
    $('.dots li a.active').css('background', 'linear-gradient(#' + lineColour + ', #' + lineColour + ') no-repeat left center / 100% 2px')
    // Update last / next page links
    $('#last-page').removeClass('flat');
    $('#next-page').removeClass('flat');
    $('#last-page').addClass('pointy');
    $('#next-page').addClass('pointy');
    if (pageIndex > 0) {
      $('#last-next-container a:first-of-type').attr('href', location.pathname + '#' + (pageIndex - 1));
    } else {
      $('#last-next-container a:first-of-type').attr('href', location.pathname + '#0');
      $('#last-page').removeClass('pointy');
      $('#last-page').addClass('flat');
    }
    if (pageIndex < (sections.length - 1)) {
      var nextPageIndex = parseInt(pageIndex) + 1;
      $('#last-next-container a:last-of-type').attr('href', location.pathname + '#' + nextPageIndex);
    } else {
      $('#last-next-container a:last-of-type').attr('href', location.pathname + '#' + pageIndex);
      $('#next-page').removeClass('pointy');
      $('#next-page').addClass('flat');
    }

    // Fade in word-cloud (if it exists)
    if (pageIndex == 0) {
      setTimeout(function() { $('.word-cloud').addClass('active') }, 600);
    } else {
      setTimeout(function() { $('.word-cloud').removeClass('active') }, 300);
    }

    // Go through a sentence and trigger activate state
    function animateLetters() {
      $('section.active .animate-letters').each(function() {
        var $letters = $(this);
        var $spans = $letters.find('span');
        var spanCounter = 0;
        var spanDelay = 50;
        $spans.each(function() {
          var $span = $(this);
          setTimeout(function() {
            $span.addClass('active');
          }, (spanCounter * spanDelay));
          spanCounter++;
        });
      });
    }
    animateLetters();
  };

})(jQuery);
