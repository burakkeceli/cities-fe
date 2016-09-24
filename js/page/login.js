$(document).ready(function() {

	$('#btn-login').click(function(event)
	{  
		var data = $("#login-form").serialize();
		var urlBase = "http://localhost:8080/auth";

		$.ajax({
			url: urlBase,
			type: "POST",
			dataType: "json",
			data: "{\"username\":\"kecli\", \"password\":\"123123\"}",
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			success: function(data){
				alert("result: " +data)
			},      
			error : function(data,status,er){
				location.href = "page_500.html"
			}	
		}); 
	});
});