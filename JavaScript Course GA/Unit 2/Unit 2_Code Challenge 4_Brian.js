unit-2_lesson-4-code-challenge-switch-and-ternary-statements_seah-liwei.js
Details
Activity
unit-2_lesson-4-code-challenge-switch-and-ternary-statements_seah-liwei.js
Sharing Info
S
General Info
Type
Javascript
Size
878 bytes
Storage used
0 bytesOwned by someone else
Location
Unit 2
Owner
Seah Li-wei
Modified
Oct 8, 2016 by Seah Li-wei
Opened
4:38 PM by me
Created
Oct 8, 2016
Description
No description
Download permissions
Viewers can download


//Step 1:
var favoriteMovie = "jaws";

switch (favoriteMovie){
	case "jaws":
		console.log("You're gonna need a bigger boat.");
		break;
	case "the shining":
		console.log("All work and no play makes Jack a dull boy.");
		break;
	case "star wars":
		console.log("Do. Or do not. There is no try.");
		break;
	case "forrest gump":
		console.log("Life was like a box of chocolates.");
		break;
	case "back to the future":
		console.log("Where we're going, we don't need roads.");
		break;
	default:
		console.log("Great movie choice!");
}

//Step 2
var isMinor;
var age = 21;
var isMinor = age < 21 ? true : false;
console.log("The value of isMinor is " + isMinor);

//Step 3
var isHolidaySeason;
var month = "december";
var isHolidaySeason = month !== "december" ? false : true;
console.log("The value of isHolidaySeason is " + isHolidaySeason);
