'use strict';

import "../assets/css/cy_banner.scss";
import tpl from "../assets/tpl/cy_banner.tpl";


$('.cy_banner').append(tpl());
var aLi=$(".slider li");
var i=0;
var size=$(".slider li").length;
var t=setInterval(moveRight,5000);
var oButton=$(".buttons span");
var oNav=$(".main").prev();

function moveLeft(){
	i--;
	if(i==-1){
		i=size-1;
	}
	// aLi.eq(i).animate({left:'10px'}).fadeOut("fast");
	aLi.eq(i).show().siblings().hide();

	oButton.eq(i).addClass("on css-rotate").siblings().removeClass("on css-rotate");

}
function moveRight(){
	i++;
	if(i==size){
		i=0;
	}
	aLi.eq(i).show().siblings().hide();
	oButton.eq(i).addClass("on css-rotate").siblings().removeClass("on css-rotate");

}
//切换小圆点函数
var switchDots=function(){
    	oButton.click(function(){
    		if($(this).hasClass("on")){
    			$(this).removeClass("on");
    		}else{
    			$(this).addClass("on");
    		}
    		
    	});
    	$(this).siblings().removeClass("on");
   
}();

$(".banner").hover(function(){
	clearInterval(t);
},function(){t=setInterval(moveRight,5000)});

$(".prev").click(function(){
	moveLeft();
});
$(".next").click(function(){
	moveRight();
});

//点击隐藏导航栏事件
var showNav=function(){
	$(".show-nav").click(function(){
		oNav.hide();
	});
}();
