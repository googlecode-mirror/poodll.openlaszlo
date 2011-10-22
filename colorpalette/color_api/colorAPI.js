/*

Author: Shelby Mansker
License: Public Domain
Version: 1.2

Description:
------------ 

      This script provides an object named EZColorAPI that contains functions 
      for converting color values to and from Hex, RGB, HSL and HSV.

HSL Definition:
---------------

      Stands for Hue, Saturation and Luminance. Basically its a color standard,
      similar to rgb and hex codes, but it provides terms that are easier for
      human understanding and manipulation. 
			
      Hue essentially is an angle representing a color on a circle. Distinct 
      colors are about 30 degrees apart, with shades in between. 
			
      angle  color
      -----  -----
      0/360  red
      30     orange  
      60     yellow
      90     yellow-green
      120    green
      150    green-cyan
      180    cyan
      210    cyan-blue
      240    blue
      270    blue-magenta
      300    magenta
      330    magenta-red
			
      The saturation can be described as the way a color looks under certain 
      lighting conditions. Although, it basically comes down to the purity of a
      color; where the higher the number the sharper the color and the lower
      the number the more washed out.
			
      The Luminance can also be called "lighting". A luminance of 100% is always
      white, regardless the Hue or Saturation. A luminance of 0% is always black.
      I suppose you could think of it the actual light shining on the color.

HSV Definition:
---------------

      Stands for Hue, Saturation and Value. Value is sometimes called Brightness
      as well. HSV is similar to HSL, except that it uses the Value/Brightness
      component instead of the Luminance/Lighting component.
			
      The higher the Value, the brighter the color. The lower the value, the 
      darker the color.
			
      To achieve black, set both the Saturation and Value to zero. To achieve
      white, set the Saturation to zero and the Value to 100%.
			
functions:
----------

      returnBaseStr(number, base);
           -accepts a number and a base, and returns a string representing the
            number in the specified base. e.g. returnBaseStr(15, 16) would 
            return "F"
			    
      hexToRGB(hexColorStr);
           -accepts a hexidecimal value as a string and returns an associative 
            array with the converted RGB values. e.g. hexToRGB("ff0000") would 
            return {r:255, g:0, b:0}
						 
      hexToRGB_normal(hexColorStr);
           -accepts a hexidecimal value as a string and returns an associative 
            array with the converted RGB values, normalized to a value between 
            0..1. Almost all of the function in this API deal with normalized 
            values. e.g. hexToRGB_normal("ff0000") would return {r:1, g:0, b:0}
						
      rgbToHsl_normal(r, g, b);
           -accepts normalized rgb component values and returns an associative 
            array with the converted HSL values, normalized to a value between 
            0..1. e.g. rgbToHsl_normal(1, 0, 0) would return {h:0, s:1, l:.5} 
			
      hslToRgb_normal(h, s, l);
           -accepts normalized hsl values and returns an associative array with
            the converted RGB values, normalized to a value between 0..1. e.g.
            hslToRgb_normal(0, 1, .5) would return {r:1, g:0, b:0}
						
      rgbToHsv_normal(r, g, b);
           -accepts normalized rgb component values and returns an associative
            array with the converted HSV values, normalized to a value between
            0..1. e.g. rgbToHsv_normal(1, 0, 0) would return {h:0, s:1, v:1}
			
      hsvToRgb_normal(h, s, v);		
           -accepts normalized hsv values and returns an associative array with 
            the converted RGB values, normalized to a value between 0..1. e.g.
            hsvToRgb_normal(0, 1, 1) would return {r:.91, g:.23, b:.23}	<-roughly			
			
      rgbToHex_normal(r, g, b);
          -accepts normalized rgb values and returns a hexidecimal color string.
           e.g. rgbToHex_normal(1, 0, 0) would return "ff0000"
			
      hslToHex_normal(h, s, l);
           -accepts normalized hsl values and returns a hexidecimal color string.
            e.g. hslToHex_normal(0, 1, .5) would return "ff0000"
						
      normalizeRGB(r, g, b);
           -This function is provided for convenience purposes, allowing you to
            pass standard rgb component values and returning an associative
            array containing the same component values normalized to a value
            between 0 and 1, which essentially represents a percentage. e.g.
            normalizeRGB(255, 0, 0) would return {r:1, g:0, b:0}
						
      rgbFromNormal(r, g, b);
           -This function is provided for convenience purposes, allowing you to
            pass normalized rgb component values and returning an associative
            array containing the actual values. Normalized parameters must be
            between 0 and 1. e.g. rgbFromNormal(1, 0, 0) would return 
            {r:255, g:0, b:0}
						
      normalizeHSL(h, s, l);
           -This function is provided for convenience purposes, allowing you to
            pass standard hsl values and returning an associative array containing
            the same values normalized to a value between 0 and 1. The h must
            be a number between 0 and 360, while the s and l values must both
            be between 0 and 100. Note, an h value of 360 or 0 will always return
            zero (red). e.g. normalizeHSL(360, 100, 50) would return {h:0, s:1, l:.5}
						
      hslFromNormal(h, s, l);
           -This function is provided for convenience purposes, allowing you to 
            pass normalized hsl values and returning an associative array
            containing the actual values. Normalized parameters must be between
            0 and 1. e.g. hslFromNormal(.5, 1, .5) would return {h:230, s:100, l:50}
			
Examples:
---------

// this function accepts an integer color value, modifies the saturation value
// by 10% and returns a hex color string for the new color.
function getColorShade(colorInt) {
   
   //convert the color integer to a hex color string
   var aHexColor = EZColorAPI.returnBaseStr(colorInt, 16);
	 
   //convert the hex string to rgb values
   var rgb = EZColorAPI.hexToRGB_normal(parentColor);
	 
   //convert the normalized rgb values to normalized hsl values
   var hsl = EZColorAPI.rgbToHsl_normal(rgb.r, rgb.g, rgb.b);
	 
   //Modify the hsl to select a shade
   hsl.s = hsl.s - .1;
   if ( hsl.s < 0 ) hsl.s = 0;

   //convert the hsl values to html hex color code
   return = EZColorAPI.hslToHex_normal(hsl.h, hsl.s, hsl.l);
}

references/Acknowledgements:
----------------------------

  - http://130.113.54.154/~monger/hsl-rgb.html
  - http://homepages.cwi.nl/~steven/css/hsl.html
  - http://blog.webkist.com/archives/000052.html
  - OpenLaszlo Community User: bfagan. Better returnBaseStr function
	
version history:
----------------

1.2 - Cleaned up a bunch of wierd formatting characters from my editor. The file
      should look a lot better now in most editors. Also removed a lot of 
			unnecessary range checking from some of the conversion functions.

1.1 - Optomized the returnBaseStr function based on bfagan's input from the
      OpenLaszlo forums.
	
*/

//encapsulate all of the color methods into an object to protect namespaces
var EZColorAPI = new (function(){ 

/******************************************************************************/
//This function accepts a number and desired base value, and then returns a 
//string containing the converted value
this.returnBaseStr = function (num, base) {
   var h = "0123456789ABCDEF";
	 
   var n1 = Math.floor(num / base);
   var n2 = num - n1 * base;
	 
   if (n1 >= base) {
      return this.returnBaseStr(n1, base) + h.charAt(n2);
   } else {
      return h.charAt(n1) + h.charAt(n2);
   }
};

/******************************************************************************/
//This function accepts a hex color string and converts it to RGB values,
//returning the rgb values in an associative array
this.hexToRGB = function (hexColorStr) {
   //call the normalized version of this method
   var rgb = this.hexToRGB_normal(hexColorStr);
	 
   //denormalize the rgb values
   rgb.r = Math.floor(rgb.r * 255);
   rgb.g = Math.floor(rgb.g * 255);
   rgb.b = Math.floor(rgb.b * 255);
	 
   //return the rgb array
   return rgb;
};

/******************************************************************************/
//This function accepts a hex color string and converts it to a normalized RGB
//value array.
this.hexToRGB_normal = function (hexColorStr) {
   //save the string as a 16-base number
   var rgb = parseInt(hexColorStr,16);

   //break out the r, g, b values and normalize them by dividing them by 255
   //and removing the decimal (floor)
   var r=Math.floor((rgb & 0xff0000) / 0x10000) / 255;
   var g=Math.floor((rgb & 0x00ff00) / 0x100) / 255;
   var b=Math.floor(rgb & 0xff) / 255;
   
   //return the rgb values as an associative array
   return {r:r, g:g, b:b};
};
      
/******************************************************************************/
//This function accepts normalized red, green and blue values and converts them
//to Hue, Saturation and Lumination values. The return value is an associative
//array with h, s and l values.
this.rgbToHsl_normal = function (r, g, b) {
   //get the largest value, OpenLaszlo only supports two parameters passed
   //to the max function, so we must check the red and green max against blue
   var max = Math.max(r, g);
   max = Math.max(max, b);
   
   //get the smallest value, same problem as with the Math.max in OpenLaszlo
   var min = Math.min(r, g);
   min = Math.min(min, b);
   
   //L is defined as (maxcolor + mincolor)/2.
   var l = (max + min) / 2;
	 
   //if the max and min colors are the same then S is 0 and H is 0 (undefined)
   var h = 0;
   var s = 0;
   if (max != min) {
      //if L is less than .5 then S is (maxcolor-mincolor)/(maxcolor+mincolor),
      //otherwise L is (maxcolor-mincolor)/(2-maxcolor-mincolor)
      if (l<.5) {
         s = (max - min) / (max + min);
      } else {
         s = (max - min) / (2 - max - min);
      }
			
      //calculate the hue and normalize it by dividing it by 6
      //If R=maxcolor, H = (G-B)/(maxcolor-mincolor)
      if (r == max) {
         h = (g-b)/(max-min)/6;
      }
      //If G = maxcolor, H = 2.0 + (B-R)/(maxcolor-mincolor)
      if (g == max) {
         h = (2.0 + (b-r)/(max-min))/6;
      }
      //If B = maxcolor, H = 4.0 + (R-G)/(maxcolor-mincolor)
      if (b == max) {
         h = (4.0 + (r-g)/(max-min))/6;
      }
   }
	 
   //if the hue is negative, add 360 (1 normalized) to it
   if (h < 0) h += 1;
   
   //return the hsl value
   return {h:h, s:s, l:l};
};

/******************************************************************************/
//convert hsl to rgb (all values 0..1)
this.hslToRgb_normal = function (h, s, l) {
  //if saturation is zero, set R, G, B all to Lumination
  var r = l; 
  var g = l;
  var b = l;
  if ( s > 0 ) {
     //if l < .5 then store a temp value as L*(1.0+S)
     //otherwise the temp value is L+S - L*S
     if ( l < .5 ) {
        var temp2 = l * (1.0 + s);
     } else {
        var temp2 = l + s - l * s;
     }
     //create another temp variable which is 2.0 * L - the other temp value (temp2)
     var temp1 = 2.0 * l - temp2;
		 
     //create a temp variable for each rgb component where:
     //for red, temp = H + 1.0/3.0
     //for green, temp = H
     //for blue, temp = H - 1.0/3.0
     var Rtemp = h + 1.0/3.0;
     var Gtemp = h;
     var Btemp = h - 1.0/3.0;
		 
     //get each component color for the rgb value 	
     var r = _hToC(temp1, temp2, Rtemp);
     var g = _hToC(temp1, temp2, Gtemp);
     var b = _hToC(temp1, temp2, Btemp);	  
  }
	
  //return the rgb values as an associative array
  return {r:r, g:g, b:b};
};

/******************************************************************************/
//convert rgb normal values to normal hsv values
this.rgbToHsv_normal = function (r, g, b) {
   //get the largest value, OpenLaszlo only supports two parameters passed
   //to the max function, so we must check the red and green max against blue
   var max = Math.max(r, g);
   max = Math.max(max, b);
   
   //get the smallest value, same problem as with the Math.max in OpenLaszlo
   var min = Math.min(r, g);
   min = Math.min(min, b);
	 
   //get the difference between the minimum and maximum values
   var del_max = max - min;
	 
   //initialize h, s, and v variables
   var h = 0;
   var s = 0;
   var v = max;
	 
   if ( del_max > 0 ) {
      var del_r = (((max - r) / 6) + (del_max / 2)) / del_max;
      var del_g = (((max - g) / 6) + (del_max / 2)) / del_max;
      var del_b = (((max - b) / 6) + (del_max / 2)) / del_max;
			
      if ( r == max ) {
         h = del_b - del_g;
      } else if (g == max ) {
         h = 1/3 + del_r - del_b;
      } else if (b == max ) {
         h = 2/3 + del_g - del_r;
      }
			
      if ( h < 0 ) h += 1;
      if ( h > 1 ) h -= 1;
			
      s = del_max / max;
   }
			
   return {h:h, s:s, v:v}; 
};

/******************************************************************************/
//convert hsv to rgb (all values 0..1)
this.hsvToRgb_normal = function (h, s, v) {
   v = v >= 1 ? 255 : v * 256;
	 
   //grey image
   if ( s == 0 ) {
      v = Math.floor(v);
      return {r:v, g:v, b:v};
   }
	 
   h = h * 6; //denormalize and divide by 60: h = h * 360 / 60
   var i = Math.floor(h);
   var f = h - Math.floor(i);
   var p = Math.floor(v * (1 - s) / 255);
   var q = Math.floor(v * (1 - s * f) / 255);
   var t = Math.floor(v * (1 - s * (1 - f)) / 255);
   v = Math.floor(v / 255);
	 
   switch (i) {
      case 0 : return {r:v, g:t, b:p} ; break
      case 1 : return {r:q, g:v, b:p}; break
      case 2 : return {r:p, g:v, b:t}; break
      case 3 : return {r:p, g:q, b:v}; break
      case 4 : return {r:t, g:p, b:v}; break
      default : return {r:v, g:p, b:q};
   } 
};

/******************************************************************************/
//This function is used by hslToRgb_normal to test each rgb component
function _hToC(temp1, temp2, temp3) {
   //make sure temp3 is between 0 and 1
   if ( temp3 < 0 ) temp3 += 1;
   if ( temp3 > 1 ) temp3 -= 1;
	 
   //set the component value to temp1 by default
   var c = temp1;
	 
   //calculate the component
   if ( 6.0 * temp3 < 1 ) {
      c = temp1 + (temp2 - temp1) * 6.0 * temp3;
   } else if ( 2.0 * temp3 < 1 ) {
      c = temp2;
   } else if ( 3.0 * temp3 < 2 ) {
      c = temp1 + (temp2 - temp1) * ((2.0/3.0) - temp3) * 6.0;
   }
	 
   //return the component
   return c;
}

/******************************************************************************/
//convert rgb normal values to hex
this.rgbToHex_normal = function (r, g, b) {
   //denormalize the rgb component values and convert each to hex
   var rHex = this.returnBaseStr(Math.floor(r * 255), 16);
   var gHex = this.returnBaseStr(Math.floor(g * 255), 16);
   var bHex = this.returnBaseStr(Math.floor(b * 255), 16);
	 
   //return the hex string
   return rHex + gHex + bHex;
};

/******************************************************************************/
//convert hsl normal values to hex
this.hslToHex_normal = function (h, s, l) {
   //convert the hsl to rgb normal values
   var rgb = this.hslToRgb_normal(h, s, l);
   //convert the rgb normal values to hex and return the hex value
   return this.rgbToHex_normal(rgb.r, rgb.g, rgb.b);
};

/******************************************************************************/
//convert standard rgb value to normalized value
this.normalizeRGB = function (r, g, b) {
   //return the normalized rgb values
   return {r:r / 255, g:g / 255, b:b / 255};	
};

/******************************************************************************/
//convert normalized rgb values to standard values
this.rgbFromNormal = function (r, g, b) {
   //calculate the actual rgb values
   var _r = Math.round(r * 255);
   var _g = Math.round(g * 255); 
   var _b = Math.round(b * 255);
	 
   //return the actual rgb values
   return {r:_r, g:_g, b:_b}; 
};

/******************************************************************************/
//convert standard hsl values to normalized values
this.normalizeHSL = function (h, s, l) {
   //return the normalized rgb values
   return {h:h / 360, s:s / 100, l:l / 100};	
};

/******************************************************************************/
//convert normalized hsl values to standard values
this.hslFromNormal = function (h, s, l) {
   //calculate the actual rgb values
   var _h = Math.round(h * 360);
   var _s = Math.round(s * 100); 
   var _l = Math.round(l * 100);
	 
   //return the actual rgb values
   return {h:_h, s:_s, l:_l}; 
};
})();
