#Image Preloader
This is a very simple image preloader for javascript.

#Example
##Include the file
```html
<script type="text/javascript" src="SimpleImagePreloader.js"></script>
```

##Loade the images
```html
<script>
(function() {
  var loader = new SimpleImagePreloader();
  loader.addImage("http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg");  //Add all the images
  loader.addImage(...);     //Add more images
  loader.doPreload();       //Load the images
})();
</script>
```
