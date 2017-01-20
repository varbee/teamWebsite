import "../assets/css/hxq_contact.scss";
import tpl from "../assets/tpl/hxq_contact.tpl";


$('.hxq_contact').append(tpl());

/*生成地图*/
function init(){
    var map = new AMap.Map('map', {
    	center: [106.643575,29.537461],
	    zoom: 6
    });
    map.plugin(["AMap.ToolBar"], function() {
    	map.addControl(new AMap.ToolBar());
   });
    var marker = new AMap.Marker({
    	position: map.getCenter()
    });
    marker.setMap(map);
	// 设置鼠标划过点标记显示的文字提示
	// marker.setTitle('我是marker的title');

	// 设置label标签
	marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
		offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
	    content: "重庆你好！勤奋蜂科技有限公司"
	});
}