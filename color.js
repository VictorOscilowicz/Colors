//Declare the Color Object with our new keyword below here.
const Color = new object ();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redworks = rgb[0]/255;
  return redworks;

};

//greenIntensity
Color.greenIntesity = function(rgb){
  let greenworks = rgb[1]/255;
  return greenworks;

};

//blueIntensity
Color.blueIntensity = function(rgb){
  let blueworks = rgb[2]/255;
  return blueworks;

}

//brightness


//complement
