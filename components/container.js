import "../assets/css/container.scss";
import tpl from "../assets/tpl/container.tpl";
import Boxlayout from './boxlayout.js';

$('.container').append(tpl);

$(function () {
    Boxlayout.init();
});
