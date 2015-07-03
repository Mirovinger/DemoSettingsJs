if(typeof MyDemoObj === 'undefined') var MyDemoObj = {};

!function($, window, document, undefined)
{    
	$.extend(MyDemoObj, 
	{
		init: function($container)
		{
			if(!$container.data('enable')) {
				console.log("The demo is disabled");
				return false;
			} 

			//Get back values
			var extraText = $container.data('text'),
				colors = $container.data('colors'),
				settings = $container.data('settings');
				

			//Square box management
			$.each(colors, function(color, enable){
				if(enable){
					var $square = $('<div class="square" />').addClass(color);
					$square.appendTo($container);
				}
			});
			
			if(!$container.children('div').length){
				 $('<div class="square black" />').appendTo($container);
			}
			
			//Extra text management
			$text = $container.children('p').first();

			if(!extraText){
				extraText = settings.boardTitle;
			}
			
			$text.text($text.text() + ': ' + extraText);
			

			//Customs modifications
			$container.css({
				'size': settings.size,
				'color': settings.color
			});
		}
	});

	XenForo.register('.demoSettingsJs', 'MyDemoObj.init');
}
(jQuery, this, document);