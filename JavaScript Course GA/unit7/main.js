// Step 1: When the user clicks on the h1
	// a) Fade toggle the img (which is hidden with css by default)
$(document).ready(function(){
    $("h1").click(function(){
            $("img").fadeToggle(3000);

            });

// Step 2: When the user focuses on the input (the focus event)
	// a) Add the active class to the input (which has been styled in the style.css)
    $("input").focus(function(){
            $(this).addClass('active'); 
        });    


// Step 3: When the user clicks or tabs away from the input (the blur event)
	// a) Remove the active class from the input

$("input").blur(function(){
            $("input").removeClass('active'); 
        }); 

// Step 4: Hide the item with the id #menu
$("#menu").click(function(){
        $(this).hide();
});

// Step 5: When the element with the id #dropdownButton is clicked,
	// a) slide toggle #menu (look up the slideToggle method if you need a refresher)
    $("#dropdownButton").click(function(){
           $("#menu").slideToggle('fast');

       });
});
