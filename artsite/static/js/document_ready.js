$(document).ready(function() {
	
	var ContentHeight = $(".left-container-outer").height();
	$(".right-container-outer").css("min-height", ContentHeight);
	
	var MaxImgHeight = .6
	var GalleryPhotoImg = $(window).height() * MaxImgHeight;
	$(".gallery-photo img").css("max-height", GalleryPhotoImg);
})