'use strict';

import "../assets/css/cy_banner.scss";
import tpl from "../assets/tpl/cy_banner.tpl";


$('.cy_banner').append(tpl());
var aLi=$(".slider li");
var i=0;
var size=$(".slider li").length;
var t=setInterval(moveRight,5000);

function moveLeft(){
	i--;
	if(i==-1){
		i=size-1;
	}
	aLi.eq(i).show().siblings().hide();

}
function moveRight(){
	i++;
	if(i==size){
		i=0;
	}
	aLi.eq(i).show().siblings().hide();


}
$(".banner").hover(function(){
	clearInterval(t);
},function(){t=setInterval(moveRight,5000)});

$(".prev").click(function(){
	moveLeft();
});
$(".next").click(function(){
	moveRight();
});