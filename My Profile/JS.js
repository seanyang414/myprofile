window.onresize = function()
{
	responsive();
}
window.onload = function()
	{
		
		responsive();	
		//slides
		var now=0;
		var slideZValue=100;
		var oSlides = document.getElementsByClassName('slides')[0];
		var aImg = oSlides.getElementsByTagName('img');

		var oSlidesBtn = document.getElementsByClassName('slidesBtn')[0];
		var aSlidesBtn = oSlidesBtn.getElementsByTagName('li');
		//click slides button
		for(var i=0; i<aSlidesBtn.length; i++)
		{
			aSlidesBtn[i].index = i;
			aSlidesBtn[i].onclick = function()
			{
				if(this.index==now)
				{
					return;
				}
				else
				{
					now=this.index;
					slidesChange();
				}
			}
		}
		//how slides move
		function slidesChange()
		{
			for(var i=0; i<aSlidesBtn.length; i++)
			{
				startMove(aSlidesBtn[i],{opacity:50});
			}

			startMove(aSlidesBtn[now],{opacity:100});

			slideZValue+=1;
			aImg[now].style.opacity = 0;
			aImg[now].style.filter = 'alpha(opacity:0)';
			aImg[now].style.zIndex = slideZValue; 
			
			startMove(aImg[now],{opacity:100});

		}
		//slides run automatic
		function autoShow()
		{
			now++;
			if(now==aImg.length)
			{now=0;}
			slidesChange();
		}
		//let slides work
		var slidesTimer = setInterval(autoShow,4500);

		//onmouseover slides stop, onmouseout continue
		oSlides.onmouseover = function(){
			clearInterval(slidesTimer);
		}
		oSlides.onmouseout = function(){
			slidesTimer = setInterval(autoShow,4500);
		}
	}


	

function responsive()
{
	//document.title = $(window).width();
	
	$('.slides').css('height',$('.slides').width()*0.43);
	$('.mainheader').css('height',$('.slides').height()+$('.navBar').height()+3);
	//nav bar
	$('.navUl').find('a').css('width', Math.floor(($('body').width())/4-1));

	if($(window).width()<=683)
	{
		$('.navUl').find('a').css('width', Math.floor(($('body').width())));
		$('.mainheader').css('height',$('.slides').height()+4*$('.navBar').height()+2);
	}
}