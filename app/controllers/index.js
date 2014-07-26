
//$.imagen.image = 'http://www.zooz.com/blog/wp-content/uploads/2012/06/appcelerator_titanium_blackberry_software.jpg';
//$.imagen.image ="imagen/titanium_logo.png";

$.botonGaleria.addEventListener("click", function(){
	Titanium.Media.openPhotoGallery({
		success: function(event){
		  var img = event.media;
		  $.imagen.image = img;
		},
		error:function(){
			alert("Hubo un erro")
			
		},
		cancel:function(){
		
		},
	});
});

$.botonCamara.addEventListener("click", function(e){
	Titanium.Media.showCamera({
		success: function(event){
		  var img = event.media;
		  $.imagen.image = img;
		},
		error:function(){
			alert("Hubo un erro")
			
		},
		cancel:function(){
		
		},
		saveToPhotoGallery:true,
	});
  
});


$.index.open();