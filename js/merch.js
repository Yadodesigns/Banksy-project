$(window).load(function(){
    setTimeout(function(){
        $('#preloader').velocity({
            opacity : 0.1,
            translateY: "-80px"
        }, {
            duration: 1000,
            complete: function(){
            $('#hola').velocity({
            translateY : "-100%"
        }, {
            duration: 3000,
            easing: [0.7,0,0.3,1],
            complete: function(){
                $('.home').addClass('animate-border divide');
            }
        })  
            }
        })
    },1000)
})