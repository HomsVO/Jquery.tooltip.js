(function($){
	//Объект с передаваемыми параметрами
	var parameters = {
		position:'top',
		text:'simple text'
	};
	//Создания тултипа
	var createTooltipBlock = function () {
		return $('<div></div>').addClass('tooltip').text(parameters.text);
	}
	//Функция задания позиции тултипу
	var setPosForTooltipBlock = function(self,tooltip){
		$('body').append(tooltip);
		var left;
		var top;
		switch(parameters.position) {
			case 'top': 
				left = self.offset().left - (tooltip.width()/2) + (self.width()/2) - 20;
				top = self.offset().top - tooltip.height() - 40;
			break;
			case 'bottom': 
				left = self.offset().left - (self.width()/2) - 20;
				top = self.offset().top + self.height() + 20;
			break;
			case 'left': 
				left = self.offset().left - tooltip.width() - self.width()/2 - 10;
				top = self.offset().top + self.height()/2 - tooltip.height() + 25;
			break;
			case 'right': 
				left = self.offset().left + self.width() + 20;
				top = self.offset().top + self.height()/2 - tooltip.height() + 25;
			break;
		}
		return tooltip.offset({'left':left,'top':top})
		}
	//Показать тултип
	var showTooltipBlock = function(){
		showingTooltip = setPosForTooltipBlock($(this),createTooltipBlock());
	}
	//Скрыть тултип
	var hideTooltipBlock = function(){
		if(showingTooltip){
			showingTooltip.remove();
		}
	}
  $.fn.tooltip = function(settings){
  		parameters = $.extend(parameters,settings)
  		var showingTooltip;
  		this.on('mouseover',showTooltipBlock).on('mouseout',hideTooltipBlock);
  		return this;
  };
})(jQuery);