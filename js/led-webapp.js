//@Author Shoaib Ud-DIn
//Send the request to the Core
//Arguments: pin, on, deviceId, accessToken
$(document).ready(function() {

	var sendRequest = function(pin, on, deviceId, accessToken) {
    var url;
    if (on) {
        url = "https://api.spark.io/v1/devices/" + deviceId + "/on?access_token=" + accessToken;
    } else {
        url = "https://api.spark.io/v1/devices/" + deviceId + "/off?access_token=" + accessToken;
    }

    console.log("jQuery AJAX: Requesting pin number " + pin + " " + (on == true ? "on" : "off") + "...");

	    //Send request using jQuery AJAX
	    $.ajax({
	        type: "POST",
	        url: url,
	        data: {
	            "args": pin
	        },
	        success: function(data) {
			    
	            data;
	            console.log('Success Data: ', data);
	            console.log('Url', url);
	        },
	        error: function(){
	        	console.log('Error, Please make sure that you typed correct Device ID and Access Token');
	        },
	        dataType: "json"
	    });
	}

	//Click function to Pin ON
	$('.on').click(function(event) {
    	/* Act on the event */
    	var deviceId = $('.device-id').val();
        var accessToken = $('.access-token').val();
        var pinNumber = $('.pin-number').val();
        sendRequest(pinNumber, true, deviceId, accessToken);
    });
	//Click function to Pin OFF
    $('.off').click(function(event) {
    	/* Act on the event */
    	var deviceId = $('.device-id').val();
        var accessToken = $('.access-token').val();
        var pinNumber = $('.pin-number').val();
        sendRequest(pinNumber, false, deviceId, accessToken);
	});   
});
