//"strict mode" is more strict about code errors, helpful for getting better at code 
//since it doesn't let much room for mistakes.
'use strict';

//reference to the button element, after setting this we can add an Event Listener for the "click" event
const switcher = document.querySelector('.btn');

//Event Listener for the "click" event, allows switching between CSS themes
switcher.addEventListener('click', function() {

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    //variable for checking the className with a conditional to determine the current CSS theme, and update the button label
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    //console log to check the current class name
    console.log('current class name: ' + className);

});