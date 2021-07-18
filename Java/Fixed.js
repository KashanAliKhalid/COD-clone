(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.Fixbar').offset().top;
 
        (window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        ('.Fixbar').css({position: 'fixed', top: '0px'});
                        ('.Fixbar').css('display', 'block');
                } else {
                        ('.Fixbar').css({position: 'static', top: '0px'});
                        ('.Video').css('display', 'none');
                }
        });
  });