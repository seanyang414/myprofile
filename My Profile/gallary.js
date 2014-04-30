$(function(){
	$('.imgLeft').css('left',-1*$(this).width()).css('opacity',0);
	$('.imgRight').css('right',-1*$(this).width()).css('opacity',0);	
	$('.gallaryTextDiv_right').css('opacity',0);
	$('.gallaryTextDiv_left').css('opacity',0);
})

$(window).scroll(function(){
	var upLimit = 400;
	var downLimit = 400;
	if($(window).scrollTop()+$(window).height()>$('.imgLeft').eq(0).offset().top+upLimit)
		{
			
			startMove($('.imgLeft').eq(0).get(0),{left:0,opacity:100},function(){
				startMove($('.gallaryTextDiv_right').eq(0).get(0),{opacity:100});				
			});

		}
	if($(window).scrollTop()+$(window).height()>$('.imgLeft').eq(1).offset().top+upLimit)
		{
			
			startMove($('.imgLeft').eq(1).get(0),{left:0,opacity:100},function(){
				startMove($('.gallaryTextDiv_right').eq(1).get(0),{opacity:100});
			});
		}
	if($(window).scrollTop()+$(window).height()>$('.imgRight').eq(0).offset().top+upLimit)
		{
			
			startMove($('.imgRight').eq(0).get(0),{right:0,opacity:100},function(){
				startMove($('.gallaryTextDiv_left').eq(0).get(0),{opacity:100});
			});
		}
	if($(window).scrollTop()+$(window).height()>$('.imgRight').eq(1).offset().top+upLimit)
		{
			
			startMove($('.imgRight').eq(1).get(0),{right:0,opacity:100},function(){
				startMove($('.gallaryTextDiv_left').eq(1).get(0),{opacity:100});
			});
		}


	if($(window).scrollTop()+$(window).height()<$('.imgLeft').eq(0).offset().top+downLimit)
		{
			
				startMove($('.gallaryTextDiv_right').eq(0).get(0),{opacity:0},function(){
					startMove($('.imgLeft').eq(0).get(0),{left:-1*$('.imgLeft').width(),opacity:0});
				});
		}
	if($(window).scrollTop()+$(window).height()<$('.imgLeft').eq(1).offset().top+downLimit)
		{
			
				startMove($('.gallaryTextDiv_right').eq(1).get(0),{opacity:0},function(){
					startMove($('.imgLeft').eq(1).get(0),{left:-1*$('.imgLeft').width(),opacity:0});
				});
		}
	if($(window).scrollTop()+$(window).height()<$('.imgRight').eq(0).offset().top+downLimit)
		{
			
				startMove($('.gallaryTextDiv_left').eq(0).get(0),{opacity:0},function(){
					startMove($('.imgRight').eq(0).get(0),{right:-1*$('.imgRight').width(),opacity:0});
				});
		}
	if($(window).scrollTop()+$(window).height()<$('.imgRight').eq(1).offset().top+downLimit)
		{
			
				startMove($('.gallaryTextDiv_left').eq(1).get(0),{opacity:0},function(){
					startMove($('.imgRight').eq(1).get(0),{right:-1*$('.imgRight').width(),opacity:0});
				});
		}


})

