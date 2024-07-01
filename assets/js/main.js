

// header fix
   $(window).on("scroll", function() {
        if (matchMedia('only screen and (min-width: 1200px)').matches) {
            var scrollPositionVh = $(window).height() * 0.3; 
            if ($(window).scrollTop() >= scrollPositionVh) {
                $('.header').addClass('fixed-header');
                $('.navbar').addClass('scrolled-navbar');
            } else {
                $('.header').removeClass('fixed-header');
                $('.navbar').removeClass('scrolled-navbar');
            }
        }
    });

    // $(window).on("scroll", function() {
    //     if (matchMedia('only screen and (min-width: 1200px)').matches) {
    //         var scrollPositionVh = $(window).height() * 0.3;
    //         if ($(window).scrollTop() >= scrollPositionVh) {
    //             $('.header').addClass('fixed-header');
    //             $('.navbar').addClass('scrolled-navbar');
    //             $('.logo-default').hide();
    //             $('.logo-fixed').show();
    //         } else {
    //             $('.header').removeClass('fixed-header');
    //             $('.navbar').removeClass('scrolled-navbar');
    //             $('.logo-default').show();
    //             $('.logo-fixed').hide();
    //         }
    //     }
    // });



        
// home page process bar
        $(document).ready(function(){
            progress_bar();
        });

        function progress_bar() {
            var speed = 30;
            var items = $('.progress_bar').find('.progress_bar_item');
            
            items.each(function() {
                var item = $(this).find('.progress');
                var itemValue = item.data('progress');
                var i = 0;
                var value = $(this);
                
                var count = setInterval(function(){
                    if(i <= itemValue) {
                        var iStr = i.toString();
                        item.css({
                            'width': iStr+'%'
                        });
                        value.find('.item_value').html(iStr +'%');
                    }
                    else {
                        clearInterval(count);
                    }
                    i++;
                },speed);
            });
        }





        // {{-- data scroll + , % --}}

        
            $(document).ready(function() {
                $('.numinate').each(function() {
                    var $this = $(this);
                    var to = $this.data('to');
                    $this.text($this.data('from') + ' +'); // Initialize with starting value and plus sign
                    $({ Counter: $this.data('from') }).animate({ Counter: to }, {
                        duration: $this.data('interval') * 500,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter) + ' +');
                        },
                        complete: function() {
                            $this.text(to + ' +'); // Ensure final value is accurate
                        }
                    });
                });
            });
            
        
            $(document).ready(function() {
                $('.nate').each(function() {
                    var $this = $(this);
                    var to = $this.data('to');
                    $this.text($this.data('from') + ' %'); // Initialize with starting value and percentage sign
                    $({ Counter: $this.data('from') }).animate({ Counter: to }, {
                        duration: $this.data('interval') * 500,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter) + ' %');
                        },
                        complete: function() {
                            $this.text(to + ' %'); // Ensure final value is accurate
                        }
                    });
                });
            });
        
