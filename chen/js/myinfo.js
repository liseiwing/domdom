// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

 var str = 'AKA GuanXi';
	 var i = 0;
	 function typing(){
	 var divTyping = document.getElementById('divTyping');
	 if (i <= str.length) {
	divTyping.innerHTML = str.slice(0, i++) + '_';
		setTimeout('typing()', 200);
	 }
	else{
		i=0;
		setTimeout('typing()', 200);
		divTyping.innerHTML = str;
		}
	}
	typing();
	
	$(function(){
		$('a').click(function(){
			$('html,body').animate({
				scrollTop:$($.attr(this,'href')).offset().top
			},500);
			return false;
		})	
	})
// $(document).ready(function(){
// 	$("#my_html").click(function(){
// 		$("#my_jsone").hide(500)
// 		$("#my_jstwo").hide(500)
// 		$("#my_jqone").hide(500)
// 		$("#my_jqtwo").hide(500)
// 	})
// })
// $(document).ready(function(){
// 	$("#my_java").click(function(){
// 		$("#my_htmlone").hide(500)
// 		$("#my_htmltwo").hide(500)
// 		$("#my_jqone").hide(500)
// 		$("#my_jqtwo").hide(500)
// 	})
// })
$(document).ready(function(){
	$("#my_all").click(function(){
		$(".my-img-all").show(500)
	})
	// 类名都写死了 练习的时候可以这样 做项目的时候千万千万不能这么写
	$("#my_html").click(function(){ //点击html
		$(".my-img-all").hide();//隐藏所有标签
		$(".html_item").show(500);//显示12
	})
	$("#my_java").click(function(){ //点击java
		$(".my-img-all").hide();//隐藏所有标签
		$(".java_item").show(500);//显示34
	})
	$("#my_jquery").click(function(){ //点击jquery
		$(".my-img-all").hide();//隐藏所有标签
		$(".jquery_item").show(500);//显示56
	})
})
$('.my-works').click(function(){
	var i = this.index();
	$('.img-thumb').eq(i).siblings('.img-thumb').hide();
	$('.img-thumb').eq(i).show();
})