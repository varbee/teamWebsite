

import "../assets/css/container.scss";
import tpl from "../assets/tpl/container.tpl";

import 'modernizr.custom.js';
import 'boxlayout.js';
$('.container').append(tpl());



$(function() {
	Boxlayout.init();
});
