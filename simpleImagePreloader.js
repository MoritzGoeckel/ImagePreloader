function SimpleImagePreloader(){
  var images = new Array();

  this.doPreload = function(){
    for(var i = 0; i < images.length; i++){
      new Image().src = images[i];
      console.log("Loading image: " + images[i]);
    }
  };

  this.addImage = function(url){
    images.push(url);
  };

  this.addImages = function(imageArray){
    for(var i = 0; i < imageArray.length; i++)
      images.push(imageArray[i]);
  };
}
