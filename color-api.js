var COLOR_API_CONFIG = {
    DOMAIN: 'https://none.cloud.tyk.io/',
    //DOMAIN: 'http://color-cloud.rhcloud.com/',
    PATH: 'color-names/v1/',
    //PATH: 'api/color/v1/',
    AUTHORIZATION: '58132f106e2e21000105f1bd782c7cf6f9ff4f8650e44206821faa49'
}

var COLOR_API = {
	/**
	 * r red
	 * g green
	 * b blue
	 * callback function to parse/render results
	 */
    nearRGB: function (r, g, b, callback) {
        $.ajax({
            url: COLOR_API_CONFIG.DOMAIN + COLOR_API_CONFIG.PATH + 'near/rgb/' + r + "," + g + "," + b,
            headers: {
                'Authorization': COLOR_API_CONFIG.AUTHORIZATION,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
            },
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function () {
                alert('boo!');
            },
            //beforeSend: setHeader
        });
    }

}