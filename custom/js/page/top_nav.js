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

