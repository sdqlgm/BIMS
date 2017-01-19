// JavaScript Document
//支持Enter键登录
document.onkeydown = function(e) {
	if ($(".bac").length == 0) {
		if (!e)
			e = window.event;
		if ((e.keyCode || e.which) == 13) {
			var obtnLogin = document.getElementById("submit_btn")
			obtnLogin.focus();
		}
	}
}

$(function() {
	// 提交表单
	$('#submit_btn')
			.click(
					function() {
						show_loading();
						if ($('#email').val() == '') {
							show_err_msg('账号还没填呢！');
							$('#email').focus();
						} else if ($('#password').val() == '') {
							show_err_msg('密码还没填呢！');
							$('#password').focus();
						}
						if ($('#email').val() == '123'
								&& $('#password').val() == '123') {
							show_msg('登录成功咯！  正在为您跳转...', '/sims/app');
						} else if ($('#email').val() == '456'
								&& $('#password').val() == '456') {
							show_msg('登录成功咯！  正在为您跳转...', '/sims/app/query.html#/app/assetManagement/studentManage?schoolId=5001&classesId=50010101&grade=2014');
						}else{
							show_err_msg('账号或密码错误！');
						}
					});
});