<div id="hxq_join_dot">
	<div>
		<a href="javascript:void(0);" class="hxq_dot" checked="true"></a><span>加入</span>
	</div>
	<div>
		<a href="javascript:void(0);" class="hxq_dot" checked="false"></a><span>联系</span>
	</div>
</div>
<div class="contact" id="contact">
	<!-- 联系我们板块 -->
	<!-- 地图API、详细地址、联系方式 -->
	<div class="contact_left">
		<div id="map"></div>
		<div class="address">
			<span>地址：重庆市南岸区南山街道崇文路二号重庆邮电大学创新创业孵化基地</span>
			
		</div>
	</div>

	<!-- 联系表单 -->
	<div class="contact_right">
		<form action="" method="post">
			<div>
				<label>姓名：</label>
				<input type="text" placeholder="请输入姓名" name="applicantname" required>
			</div>
			<div>
				<label >电话：</label>
				<input type="tel" size="11" name="tel" min="11"max="11" required>
			</div>
			<div>
				<label>邮件：</label>
				<input type="email" name="email" required>
			</div>
			<div>
				<label>备注：</label>
				<textarea placeholder="请将意见或建议写入此区域" name="introduce" required></textarea>
			</div>
			<div>
				<input type="submit" name="" value="确认" >
			</div>
		</form>
	</div>

	
</div>


<!-- 加入我们 -->
<div class="join" id="join">
	<form id="joinform" action="" method="post">
		<div class="label_box">
            <label for="name">姓名</label>
            <label>性别</label>
            <label>学校</label>
            <label>院系/专业/年级</label>
            <label>联系电话</label>
            <label>报名组别</label>
        </div>
        <div class="input_box">
            <div class="row">
                <input type="text" name="name" id="name" required="reqired">
            </div>
            <div class="row">
                <label class="sex">
                	<input name="sex" value="male" checked="checked" type="radio"/><span class="radio">男</span>
                </label>
                <label class="sex">
                    <input name="sex" value="female" type="radio" /><span>女</span>
                </label>
            </div>
            <div class="row">
                <input type="text" name="school">
            </div>
            <div class="row" id="grade">
                <input type="text" placeholder="16字以内">
            </div>
            <div class="row" id="tel">
                <input type="tel">
            </div>
            <div class="row last radgr " id="group">
            	<select name="group" id="">
                    <option value="">市场运营</option>
                    <option value="">产品策划</option>
                    <option value="">视觉设计</option>
                    <option value="">技术研发部（前端）</option>
                    <option value="">技术研发部（后台）</option>
                    <option value="">技术研发部（移动）</option>
                </select>
            </div>
        </div>
        <div class="self_introduce">
            <h3>个人简介</h3>
            <textarea name="selfIntro" id="selfText" placeholder="自我介绍/组别意向的来由/个人优势等等"></textarea>
            <input type="submit" value="报名">
        </div>
	</form>
</div>

<!-- 底栏 -->
<div class="hxq_footer">
	<span>--------------------------------</span>
	<a href="#"><img src="../assets/images/hxq_weiboc.png"></a>
	<a href="javascript:void(0);"><img class="hxq_footer_wechat" src="../assets/images/hxq_wechat.png" ></a>
	<span><img class="hxq_footer_code" src="../assets/images/hxq_ercode.png" alt="二维码"></span> 
	<span>联系方式：400-8388-719</span>
	<span>邮件: <a href="#">contact@campussay.com</a></span>
	<span>渝ICP备xxxxxx号</span>
</div>

