var friendShipRequest = config.urlBase + friendShip.request;
$.ajax({
	url: friendShipRequest,
	type: "GET",
	headers : {
		'Accept' : 'application/json',
		'Content-Type' : 'application/json',
		'X-Auth-Token' : localStorage.userToken
	},
	success: function(data) {
		var count = 0;
		var userRequestList = [];
		$.each(data, function (index, value) {
			count = count + 1;
			userRequestList.push({id: value.id, username: value.username, email: value.email});
	    });
		var requestCount = $('#friendship-request-count');
		requestCount.append(count);
		appendUserRequestListToAlert(userRequestList);
	},
	error : function(data,status,er){
		alert(JSON.stringify( data ))
		//location.href = "page_500.html"
	}
});

function appendUserRequestListToAlert(userRequestList) {
	jQuery.each( userRequestList, function( i, val ) {
		$("ul[id='friendRequest']").append(
		    $('<li>')
		    	.append($('<a>')
		        	.append($('<span>').attr('class','image').append($('<img>').attr('src','images/img.jpg').attr('alt','Profile Image')))
		        	.append($('<span>').append($('<span>').append(val.username)).append($('<span>').attr('class','time').append(val.country)))
		        	.append($('<span>')
		        		.append($('<span>')
			        		.append($('<a>')
			        			.attr('role','button')
			        			.append($('<i>')
			        				.attr('class','fa fa-check')
				        			.attr('onclick', 'acceptRequest()')
				        			.attr('id', 'requestAccept')))))
		));
	});
}