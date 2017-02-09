'use strict';

import "../assets/css/cy_banner.scss";
import tpl from "../assets/tpl/cy_banner.tpl";


$('.cy_banner').append(tpl());

var oSlider=$(".slider");
var prev=$(".prev");
var next=$(".next");
var oWidth=parseInt($(window).width());
var interval=3000;
var timer=null;

function autoplay(){
	timer=setTimeout(function(){
		next.trigger('click');
		autoplay();
	},interval);
}
function stop(){
	clearInterval(timer);
}
oSlider.on('mouseover',function(){
	stop();
});
oSlider.on('mouseout',function(){
	autoplay();
});