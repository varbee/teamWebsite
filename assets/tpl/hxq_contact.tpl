<!-- 加入我们板块 -->
	<h1>加入我们</h1>
	<!-- 地图API、详细地址、联系方式 -->
	<div class="join_left">
		<div id="map"></div>
		<script src="http://webapi.amap.com/maps?v=1.3&key=97708bd3d4bcb87c5623a37cc19da510&callback=init"></script>	
			<script>
			    function init(){
			        var map = new AMap.Map('map', {
			            center: [106.604082,29.532844],
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
				    marker.setTitle('我是marker的title');

				    // 设置label标签
				    marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
				        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
				        content: "重庆你好！勤奋蜂科技有限公司"
				    });
			    }
			</script>
		<div class="address">
			<span>地址：重庆市南岸区南山街道崇文路二号重庆邮电大学创新创业孵化基地</span>
			<span>联系方式：400-8388-719</span>
			<span>邮件: contact@campussay.com</span>
			<span>渝ICP备xxxxxx号</span>
		</div>
	</div>

	<!-- 加入表单 -->
	<div class="join_right">
		<form action="">
			<div>
				<label>姓名：</label>
				<input type="text" placeholder="请输入姓名">
			</div>
			<div>
				<label >电话：</label>
				<input type="text">
			</div>
			<div>
				<label>邮件：</label>
				<input type="text">
			</div>
			<div>
				<textarea placeholder="自我介绍" ></textarea>
			</div>
			<div>
				<input type="submit" name="" value="确认">
			</div>
		</form>
	</div>
	<div class="hxq_footer">
		
	</div>


