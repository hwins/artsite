/**
 * This script will execute the composition, Will It Rain? 
 * Please give me credit if you want to make use of this.
 * 
 * This work is licensed under the Creative Commons 
 * Attribution-NonCommercial-ShareAlike 3.0 Unported 
 * License. To view a copy of this license, visit 
 * http://creativecommons.org/licenses/by-nc-sa/3.0/ 
 * or send a letter to Creative Commons, 
 * 444 Castro Street, Suite 900, Mountain View, 
 * California, 94041, USA.
 * 
 * Copyright (C) 2011 - Howard Winston
 * http://howardwinston.com
 * 
 * Note: this calls MIT licensed code external to this file. See items
 * within this directory.
 * 
 */
 
	buzz.defaults.formats = [ 'ogg', 'mp3', 'wav' ];
	
	var blink0Sound = new buzz.sound('sounds/blink0');
	var blink1Sound = new buzz.sound('sounds/blink1');
	var blink2Sound = new buzz.sound('sounds/blink2');
	var blink3Sound = new buzz.sound('sounds/blink3');
	var blink4Sound = new buzz.sound('sounds/blink4');
	var blink5Sound = new buzz.sound('sounds/blink5');
	var blink6Sound = new buzz.sound('sounds/blink6');
	var blink7Sound = new buzz.sound('sounds/blink7');
	var blink8Sound = new buzz.sound('sounds/blink8');
	var blink9Sound = new buzz.sound('sounds/blink9');	
	
	if (!buzz.isSupported()) {
		$volume.hide();
	}
	
	// css id vars
	var centralArea = '<div id="centralArea">';
	var closeDiv = '</div>';
	var upperLeft = '<div id="upperLeft">';
	var lowerLeft = '<div id="lowerLeft">';
	var upperRight = '<div id="upperRight">';
	var lowerRight = '<div id="lowerRight">';
	
	// css class vars
	var boxDotOn = '<div class="boxDotOn">';
	var boxDotOff = '<div class="boxDotOff">';
	var threeBoxLine = '<div class="threeBoxLine">';	
		
$(document).ready(function() {
	
	//all of the image files should be cached in the user's browser
	// so no need to keep pulling them with every page request
	function doNotKeepLoading() {
		$('#hide').replaceWith('');
	}
	doNotKeepLoading();
	
	// build array to hold slides and with appropriate scripts per slide
	var slidearray = [];

	// 01
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 02
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 03
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 04
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 05
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 06
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 07
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 08
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 09
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 10
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 11
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 12
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 13
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 14
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 15
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 16
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 17
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 18
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 19
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 20
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 21
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 22
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 23
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 24
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 25
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 26
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 27
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 28
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 29
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 30
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	// 31
	slidearray.push({
		src : "img/skycolor.png",
		fade : 0000,
		loading : false,
		complete:function() {
			var numRand = Math.floor(Math.random()*10);
			eval('blink' + numRand + 'Sound.play();');
			var replaceString = centralArea
				+ '<center>'
				+ '<img alt="" src="img/cloudshot.png">'
				+ '</center>'
				+ threeBoxLine
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ boxDotOff
				+ '<a></a>'
				+ closeDiv
				+ boxDotOn
				+ '<a></a>'
				+ closeDiv
				+ closeDiv
				+ closeDiv;
			$('#centralArea').replaceWith(replaceString);
		}
	});
	
	$.vegas('slideshow', {
		delay : 1000,
		preload : true,
		backgrounds : slidearray
	});
	

});