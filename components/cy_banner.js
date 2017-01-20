'use strict';

import "../assets/css/cy_banner.scss";
import tpl from "../assets/tpl/cy_banner.tpl";


$('.cy_banner').append(tpl());

var w=$('.slider li').width();
var l=0;
var timer=null;
var len=$(".slider li").length*2;
$(".slider").append($(".slider").html()).css({'width':len*w,'left':-len*w/2});
function init(){
	$(".banner .next").trigger('click');
}
timer=setInterval(init,2000);
$(".slider li").hover(function(){
	clearInterval(timer);

},function(){
	timer=setInterval(init,2000);
});

	  $(".prev").click(function(){

		  l=parseInt($(".slider").css("left"))+w; 

			 showCurrent(l); 

		  });

		  $(".next").click(function(){

		     l=parseInt($(".slider").css("left"))-w;  

			showCurrent(l);

	  });

	   function showCurrent(l){    

	   if($(".slider").is(':animated')){ 

	      return;

	   }

		  $(".slider").animate({"left":l},500,function(){

				if(l==0){ 

			   $(".slider").css("left",-len*w/2);   

			   

			 }else if(l==(1-len)*w){ 

				 $(".slider").css('left',(1-len/2)*w); 

				}

		    }); 	  

		 }