/**
 * @Description jQuery无缝滚动内容插件
 * @author admin@f2e.be
 * @DOM
 *  	<div id="scroll">
 *  		<ul id="scrollCon">
 *   			<li></li>
 *   			<li></li>
 *  		</ul>
 *  	</div>
 *		<span class="arraw" id="prevBtn">
 *			<i class="icon-caret-down" ></i>
 *		</span>
 *		<span class="arraw" id="nextBtn">
 *			<i class="icon-caret-down" ></i>
 *		</span>		
 * @CSS
 *  	#scroll {overflow:hidden;width:200px;height:50px;}
 * 		#scrollCon{position:relative;left:0;top:0;}
 * @Usage
 *  	$('#scroll').scrollImgs({
 *	    	prevBtn : $('#prevBtn'),
 *	    	nextBtn : $('#nextBtn')
 * 			event : 'click'
 *	    });
 *
 * @options
 *		speed:'slow',	//滚动速度fast slow 毫秒数
 *  	delayTime:2000,	//滚动间隔时间 默认3000ms
 *		event:'click',	//手动触发事件
 *		auto:true		//是否自动开始滚动 默认true
 *		direction:left	//滚动方向left左右滚动,top上下滚动 默认left
 * 		manual:true 	//是否需要手动滚动，默认true
 */

;(function($){
	
	$.fn.scrollImgs = function(options) { 

		var defualts = {
			speed: 'slow',
			delayTime: 3000,
			event: 'click',
			auto : true,
			direction : 'left',
			manual : true
		};

		var opts = $.extend({}, defualts, options),
			$ul = this.children('#scrollCon'),
			$li = $ul.children(),
			$prev = opts.prevBtn,
			$next = opts.nextBtn,
			listNum = $li.size(),//总个数
			distance,
			t1,
			t2,
			delayTime = opts.delayTime,//间隔时间
			speed = opts.speed,
			direction = opts.direction;

		var mode = direction === 'left' ? 1 : 0 ;

		if(mode) {
			distance = $li.outerWidth();
			$ul.width(distance*(listNum+2));
			var nextMode = { left : '-'+distance+'px'},
			prevMode =  { left: 0};
		}else{
			distance = $li.outerHeight();
			$ul.height(distance*(listNum+2));
			var nextMode = { top : '-'+distance+'px'},
			prevMode =  { top: 0};
		}

		var fun = {

			init : function() {
				if(opts.auto){
					setTimeout(function () { 
						fun.autoScroll();
					}, delayTime);
				}
				if(!opts.manual) return;
				this.manual();
			},
			autoScroll : function() {
				fun.clear();
				$ul.animate(nextMode,speed,function() {
					$ul.children(':first').remove().clone().appendTo($ul);
					$ul.css(direction, 0);
				});
				t1 = setTimeout(arguments.callee, delayTime);
			},

			manual : function() {
				$prev.off().on(opts.event,function(){
					fun.clear();
					var eles = $ul.children(':last');
					eles.clone().prependTo($ul);
					$ul.stop(true, true).css(direction,-distance).animate(prevMode,speed,function() {
							eles.remove();
						});
					t2 = setTimeout(arguments.callee, delayTime);
				});

				$next.off().on(opts.event, function() {
					fun.autoScroll();
				});
			},

			clear : function () {
				if(t1){clearTimeout(t1)}
				if(t2){clearTimeout(t2)}
			}
		}

		fun.init();

	};
})(jQuery);
