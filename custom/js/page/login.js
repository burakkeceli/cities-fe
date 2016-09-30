$(document).ready(function() {

	var authUrl = config.urlBase + url.auth;
	var loginUrl = config.urlBase + url.login;

	$('#btn-login').click(function(event)
	{
		var username = $('#username').val();
		var password = $('#password').val();
		var loginData = JSON.stringify({username: username, password: password});
		$.ajax({
			url: authUrl,
			type: "POST",
			dataType: "json",
			data: loginData,
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			success: function(data){
				localStorage.userToken = (JSON.stringify(data.token));
				location.href = "profile_page.html"
			},
			error : function(data,status,er){
				alert(JSON.stringify(data));
				location.href = "page_500.html"
			}
		});
	});

	$('#btn-register').click(function(event)
	{
		var username = $('#username-reg').val();
		var password = $('#password-reg').val();
		var registerData = JSON.stringify({username: username, password: password});
		$.ajax({
			url: loginUrl,
			type: "POST",
			dataType: "json",
			data: registerData,
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			success: function(data){
				localStorage.userToken = (JSON.stringify(data.token));
				location.href = "profile_page.html"
			},
			error : function(data,status,er){
				location.href = "page_500.html"
			}
		});
	});
});