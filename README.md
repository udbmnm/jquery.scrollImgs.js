jquery.scrollImgs.js
====================

jquery图片无缝滚动插件


=====================
必须保持如下HTML结构
==================
 *  	<div id="scroll">
 *  		<ul>
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
 ==============
滚动区域div必须写上overflow:hidden
#scroll {overflow:hidden;width:200px;height:50px;}
==============
#####调用方法如下
 *  	$('#scroll').scrollImgs({
 *	    	prevBtn : $('#prevBtn'),
 *	    	nextBtn : $('#nextBtn')
 * 			event : 'click'
 *	    });
 *	    
 
具体参数请看插件注释
