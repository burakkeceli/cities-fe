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
				alert(localStorage.userToken),
		    	setTimeout(2000);
		    	setTimeout(function(){
					secondCall();
				},5000); 
				//location.href = "profile_page.html"
			},
			error : function(data,status,er){
				alert(JSON.stringify(data));
				//location.href = "page_500.html"
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
				//location.href = "page_500.html"
			}
		});
	});
});

function secondCall() {
	var urlBase = config.urlBase + city.liked;
	alert("city liked : " +urlBase);
	$.ajax({
		url: urlBase,
		type: "GET",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
			'X-Auth-Token' : localStorage.userToken
		},
		success: function(data) {
			var showName = $('#show-name');
			var nameSurname = '';
			$.each(data, function (index, value) {
		        nameSurname += value + " ";
		    });
		    showName.append(nameSurname);
		    alert(nameSurname);
	    	setTimeout(function(){
				thirdCall();
			},15000);
		},
		error : function(data,status,er){
			alert(JSON.stringify( data ));
			thirdCall();
		}
	});
}

function thirdCall() {
	var friendShipRequest = config.urlBase + friendShip.request;
	alert("friendShipRequest:" +friendShipRequest);
	$.ajax({
		url: friendShipRequest,
		type: "GET",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
			'X-Auth-Token' : localStorage.userToken
		},
		success: function(data) {
			alert(JSON.stringify(data));
			var count = 0;
			$.each(data, function (index, value) {
				alert("value : " + JSON.stringify(value));
				count = count + 1;
		    });
			var requestCount = $('#friendship-request-count');
			requestCount.append(count);
		},
		error : function(data,status,er){
			alert(JSON.stringify( data ))
			//location.href = "page_500.html"
		}
	});
}