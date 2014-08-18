jquery.scrollImgs.js
====================

jquery图片无缝滚动插件


HTML结构必须保持正确的ID，结构可以按自己需要修改
==================
   	<div id="scroll">
   		<ul id="scrollCon">
    			<li></li>
    			<li></li>
   		</ul>
   	</div>
 		<span class="arraw" id="prevBtn">
 			<i class="icon-caret-down" ></i>
 		</span>
 		<span class="arraw" id="nextBtn">
 			<i class="icon-caret-down" ></i>
 		</span>		

滚动区域必须可以改变top，left等值可以滚动，可以写position:relative,或者绝对定位，宽高自定义

#####调用方法如下

   	$('#scroll').scrollImgs({
 	    	prevBtn : $('#prevBtn'), //向前滚动按钮
 	    	nextBtn : $('#nextBtn') //向后滚动按钮
  			event : 'click' //触发事件方式
  			direction : 'left' //滚动方向left左右滚动,top上下滚动 默认left
  			speed:'slow'	//滚动速度fast slow 毫秒数
 	    });
 	    
 
具体参数请看插件注释
