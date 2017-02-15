import "../assets/css/nav_menu.scss";
import tpl from "../assets/tpl/nav.tpl";


$('.nav').append(tpl());

$(function(){
var timer=null;
var oBanner=$(".nav").next().children(":first").children(":first");
// console.log(ocy_banner.height());
$(".introduction").click(function(){
	scroll(oBanner);
});
function scroll(obj){
	// console.log(obj.position().top);
}


});
