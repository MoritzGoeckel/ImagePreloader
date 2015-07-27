function SimpleImagePreloader(){
  var images = new Array();

  this.doPreload = function(){
    for(var i = 0; i < images.length; i++)
      new Image().src = images[i];
  };

  this.addImage = function(url){
    this.images.push(url);
  };

  this.addImages = function(imageArray){
    for(var i = 0; i < imageArray.length; i++)
      this.images.push(imageArray[i]);
  };
}
