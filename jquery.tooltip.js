(function($){
	var parameters = {
		position:'top',
		text:'simple text'
	};

	var create = function () {
		return $('<div></div>').addClass('tooltip').text(parameters.text);
	}
	var setPos = function(self,tooltip){
		$('body').append(tooltip);
		var left;
		var top;
		switch(parameters.position) {
			case 'top': 
				left = self.offset().left - (tooltip.width()/2) + (self.width()/2);
				top = self.offset().top - tooltip.height() - 40;
			break;
			case 'bottom': 
				left = self.offset().left + (self.width()/2) - 20;
				top = self.offset().top + self.height() + 20;
			break;
		}
		return tooltip.offset({'left':left,'top':top});
			}
	var show = function(){
		showingTooltip = setPos($(this),create());
	}
	var hide = function(){
		if(showingTooltip){
			showingTooltip.remove();
		}
	}
  $.fn.tooltip = function(settings){
  		parameters = $.extend(parameters,settings)
  		var showingTooltip;
  		this.on('mouseover',show).on('mouseout',hide);
  		return this;
  };
})(jQuery);