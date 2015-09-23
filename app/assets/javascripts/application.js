// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= requier boostrap-sprockets
//= require jquery_ujs
//= require turbolinks

//= require 'quantize.js'
//= require 'mustache.js'
//= require_tree .



$(document).ready(function(){

	// var ctx = document.getElementById("imageHolder").getContext('2d');
	// var img = new Image();

	$("div.thumbnail").hover(function(){
		$(this).parent().siblings('.caption').addClass("hover");
		$target_image = $(this).find('img.thumbnail');
		// parseImg($target_image);
		// $colorThiefOutput = $(this).parent().siblings('.color-thief-output');
		// $colorThiefOutput.addClass("hover");
		// showColorForImage($target_image, $colorThiefOutput);
	}, function(){
		$(this).parent().siblings('.caption').removeClass("hover");
	});


	// function parseImg($image){
	// 	img.src = "http://hungry-media.com/code/color-extract/getImage.php?" + $image[0]['src'];
	// 	ctx.width = 600;
	// 	ctx.height = 600;
	// 	ctx.clearRect(0,0,600,600);
	// 	img.onload = function(){
	// 		ctx.width = img.width;
	// 		ctx.height = img.height;
	// 		ctx.drawImage(img, 0, 0);
	// 		// var imgd = ctx.getImageData( 0, 0, $('#imageHolder').width(), $('#imageHolder').height() );
	// 		// console.log(imgd);
	// 		// ctx.clearRect(0,0,600,600);
			
	// 	}
	// }

	// var colorThief = new ColorThief();

	// var showColorForImage = function($image, $imageSection){
	// 	var image = $image[0];
	// 	// console.log(image['src']);
	// 	var new_image = new Image();
	// 	new_image['src'] = "http://hungry-media.com/code/color-extract/getImage.php?" + image['src'];
	// 	var color = colorThief.getColor(new_image);
	// 	var palette = colorThief.getPalette(new_image);
	// 	var colorThiefOutput = {
	// 		color: color,
	// 		palette: palette
	// 	};
	// 	console.log(color);
	// 	// $imageSection.css("background-color", "rgb(" + color.0 + ", " + color.1 + ", " + color.2 + ")")	;
	// }

})










