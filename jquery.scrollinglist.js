/*!
 * jQuery Scrollbox
 * (c) 2013 Artem Demo <artemdemo@gmail.com>
 * MIT Licensed.
 *
 * http://github.com/artemdemo/scrollinglist
 */

(function($) {

	$.fn.scrollinglist = function(config) {

		var defConfig = {
			speed: 1500,		//animation speed
			delay: 1000,		//delay after each step
			pauseOnHover: true,	//pause animation when mouse is hovering container
			developing: false,	//developing mode allow to show warnings and errors
			startFromBottom: false,
		}
		config = $.extend(defConfig, config);

		var $container = $(this);
		var $list = $( $(this).children()[0] );

		if ( $(this).children()[0] == undefined ) {
			if (config.developing) console.error('scrollinglist --> Error: There are NO LIST in container. Function has been aborted.');
			return;
		}

		var container_height = $container.height();
		var list_height = $list.height();

		var container_start_position = $container.position();
		var list_start_position = $list.position();

		// I need to take into account that it could be padding or margin
		// Therefor I need to check gap between container and list
		var container_list_gap = list_start_position.top - container_start_position.top;

		// Now I need to change position to relative for animation
		$list.css('position', 'relative');

		if (config.startFromBottom) {
			var top = container_height;
			$list.css('top', top);
		}

		move_list();

		function move_list() {
			if ( list_height < container_height ) {
				if (config.developing) console.warn('scrollinglist --> Notice: List is shorter than container, animation has been stopped.');
				return;
			}
			var $first_child = $( $list.children()[0] );
			var first_child_height = $first_child.height();
			var moving_height = (-1)*first_child_height - container_list_gap;

			//In case of startFromButton I need only to go to the top of my container
			if (config.startFromBottom) {
				moving_height = 0;
			}

			//After pausing I can't use same speed, because I moved, therefor my speed must be slower
			//I need to recalculate it
			var speed_coof = (first_child_height + $list.position().top - list_start_position.top + container_list_gap) / first_child_height;
			if (speed_coof > 1) speed_coof = 1;
			var speed = config.speed * speed_coof;

			$list.animate({
				top: moving_height,
			}, {
				duration: speed,
				step: function() {
				},
				complete: function(){
					if (config.startFromBottom) {
						//In case of startFromButton I don't want to move first child, only cancel this option
						config.startFromBottom = false;
						//I need following string only to apply delay
						$list.delay( config.delay ).css('top', '0');
					} else {
						//Append take first element and put it at the end of the list
						//I also put delay here
						$list.delay( config.delay ).append( $first_child );
						$list.css('top', '0');
					}

					move_list();
				}
			});
		}

		$container.mousemove(function( event ){
			if (config.pauseOnHover) $list.stop();
		});

		$container.mouseleave(function() {
			if (config.pauseOnHover) move_list();
		});
	}
}(jQuery));