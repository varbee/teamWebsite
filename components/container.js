
import "../assets/css/container.scss";
import tpl from "../assets/tpl/container.tpl";

$('.container').append(tpl());

$(function() {
	Boxlayout.init();
});
