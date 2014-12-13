$('.inkMe').click(function(evt){
	var elem = $(this);
	var multiple = false;
	(this.getAttribute("multiple-ink")== 'true')?multiple = true:true;
	if(!multiple)
		{
			if(elem.find(".ink").length == 0)
				elem.prepend("<span class='ink'></span>");
		}
	else
		elem.prepend("<span class='ink'></span>");
	var display = elem.css("display");
	(display=='inline'||display=='inline-block')?elem.css({display:'inline-block'}):elem.css({display:'block'});
	var ink = elem.find('.ink');
	ink.addClass('inkDefaultColor');
	// For custom colors in the ripple
	if($(this).is('[ink-color]'))
	{
		var inkColor = this.getAttribute("ink-color");
		if(inkColor!="")
		{
			ink.removeClass('inkDefaultColor');
			ink.addClass(inkColor);
		}
	}
	(!multiple)?ink.removeClass('animate'):true;
	if(!ink.width()&&!ink.height())
		{
			var max = Math.max(elem.outerWidth(),elem.outerHeight());
			ink.css({width:max+'px',height:max+'px'});
		}
	var x = evt.pageX - elem.offset().left - ink.width()/2;
	var y = evt.pageY - elem.offset().top - ink.height()/2;
	ink.css({top:y+'px',left:x+'px'});
	setTimeout( function(){ink.addClass('animate');},1);
});
