$(document).ready(function() {

	var urlBase = config.urlBase + url.auth;
	$('#btn-login').click(function(event)
	{
		var data = $("#login-form").serialize();
		$.ajax({
			url: urlBase,
			type: "POST",
			dataType: "json",
			data: "{\"username\":\"keceli\", \"password\":\"123123\"}",
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