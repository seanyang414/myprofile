$(function(){
		//nav bar mouseover
		$('.cross').click(function()
		{
				now=null;
				//alert('cross');
				$('.navContent').children('.navBlock').css('display','none');
				$('.resumeCont').css('opacity',0);
				$('.navContent').animate({height:0},300);
				var correspondATag =  $('.navUl').find('a');
				correspondATag.animate({letterSpacing:1},100,'linear',function()
						{
							correspondATag.animate({marginTop:0,width:$(this).height()},200,'swing');
							//correspondATag.css('background','#666');	
							correspondATag.css('color','white');	
						});
		});
		//cross mouse movement
		$('.cross').mouseover(function(){
			$(this).animate({opacity:0.8},200,'swing');
		});
		$('.cross').mouseout(function(){
			//alert('a');
			$(this).animate({opacity:0.5},200);
		});
				
		var now;
		$('.navUl').find('a').click(function(){return false;});//remove click reaction
		$('.navUl').find('a').mouseover(function()
		{

			var thisBlock = $('.navContent').children('.navBlock').eq($(this).parent().index());
			var oriATag = $('.navUl').find('a').eq(now);
	
			
			

			if($(this).parent().index()==now)
			{
				return;//if mouseover the same a tag, no reaction
			}
			else
			{
					if(now!=null)
					{
						$('.navContent').children('.navBlock').css('display','none');
						$('.resumeCont').css('opacity',0);
							oriATag.animate({letterSpacing:1},100,'linear',function()
							{
								oriATag.animate({marginTop:0,width:$(this).height()},200,'swing');
								//oriATag.css('background','#666');	
								oriATag.css('color','white');	
							});	
						
					}
					else{}
					

					//$(this).css('background','white');
					//$(this).css('color','black');
					$(this).animate({marginTop:30},400,'swing');
					$(this).animate({letterSpacing:3,width:$(this).height()*1.2},500,'swing');
					
						thisBlock.css('display','block');
					
					//$('.navContent').children().eq($(this).parent().index()).css('display','block');	
					

					now=$(this).parent().index();			

			}

			$('.navContent').animate({height:thisBlock.height()},300,function(){
				thisBlock.children('div').animate({opacity:1},700);
			});
			
		});		
	});
	