"use strict";

function myClick() {
    alert(123)
    console.log(event.target)
}
/*
document.querySelector('#one').onclick = myClick;
document.querySelector('body').onclick = myClick;
document.querySelector('html').onclick = myClick;
*/

document.onclick = function(event) {
    //console.log(event);
    if (event.target.id == 'one') {
        console.log('кликнули на ONE')
    }
}
document.querySelector('#two').onclick = function() {
    event.stopPropagation(); // не дает распространяться клику дальше
    console.log('кликнули на TWO');
}
document.querySelector('.three').onclick = function() {
    this.style.display = 'none';
}