(function(global) {
	let ajaxMain = {}

	let verifyAjax = function() {
		if (XMLHttpRequest) {
			return (new XMLHttpRequest);
		} else {
			global.alert("AJAX not supported in your current browser");
		};
	};

	let makeRequest = function(requestURL, responseHandler, JSONresource) {  //to be used by the programmer
		let userRequest = verifyAjax();
		userRequest.onreadystatechange = function() {
			verifyConnection(userRequest, responseHandler, JSONresource);
		};
		userRequest.open("GET", requestURL, true);
		userRequest.send(null);
	}

	let verifyConnection = function(userRequest, responseHandler, JSONresource) {
		if ((userRequest.readyState === 4) && (userRequest.status === 200)) {
			responseHandler = function() {
				if ((JSONresource) || (JSONresource === undefined)) {
					return (JSON.parse(userRequest.responseText));
				} else {
					return (userRequest.responseText);
				};	
			};
			
		};
	};

	global.$ajaxMain = ajaxMain;

})(window);