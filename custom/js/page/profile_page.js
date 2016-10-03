var urlBase = "http://localhost:8080/city/liked";
$.ajax({
	url: urlBase,
	type: "GET",
	async:false,
	headers : {
		'Accept' : 'application/json',
		'Content-Type' : 'application/json',
		'X-Auth-Token' : localStorage.userToken
	},
	success: function(data) {
		$(document).ready(function() {
			var showName = $('#show-name');
			var nameSurname = '';
			$.each(data, function (index, value) {
		        nameSurname += value + " ";
		    });
		    showName.append(nameSurname);
        });
	},
	error : function(data,status,er){
		alert(JSON.stringify( data ))
		location.href = "page_500.html"
	}
});