$(document).ready(function() {
    var rgbQuery;
    $('#colorpickerholder').farbtastic(function (color) {
        console.log(color);
        rgbQuery = hexToRgbA(color);
        $('.jumbotron').css('background-color', color);
        console.log(rgbQuery);
    });

	$("#callbtn").click(function(event){
		$('#callbtn').prop('disabled', true);
		$('#output').empty();
        var rgba = $('#colorpickerholder')
		
        COLOR_API.nearRGB(rgbQuery[0], rgbQuery[1], rgbQuery[2], render);
	});
});

function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
    }
    throw new Error('Bad Hex');
}


function render(entries) {
	$('#callbtn').prop('disabled', false);
	if (entries.forEach == undefined) {
		createErrorResult();
		return;
	}
	if (entries.length == 0) {
		createNoResult();
		return;
	}
	entries.forEach(function(entry) {
		createResult(entry);
	});
}

function createErrorResult() {
	var template = $.templates("#errorresult");
	var htmlOutput = template.render();
	$("#output").append(htmlOutput);
}

function createNoResult() {
	var template = $.templates("#noresult");
	var htmlOutput = template.render();
	$("#output").append(htmlOutput);
}

function createResult(entry) {
    entry.reference = $('.jumbotron').css('background-color');
	var template = $.templates("#result");
	var htmlOutput = template.render(entry);
	$("#output").append(htmlOutput);
}