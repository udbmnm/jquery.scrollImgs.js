jquery.scrollImgs.js
====================

jquery图片无缝滚动插件


必须保持如下HTML结构
==================
   	<div id="scroll">
   		<ul>
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

滚动区域div必须写上overflow:hidden
overflow:hidden;width:200px;height:50px;

#####调用方法如下
   	$('#scroll').scrollImgs({
 	    	prevBtn : $('#prevBtn'), //向前滚动按钮
 	    	nextBtn : $('#nextBtn') //向后滚动按钮
  			event : 'click' //触发事件方式
  			direction : 'left' //滚动方向left左右滚动,top上下滚动 默认left
  			speed:'slow'	//滚动速度fast slow 毫秒数
 	    });
 	    
 
具体参数请看插件注释
