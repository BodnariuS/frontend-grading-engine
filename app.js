/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!


function imgChange (){
 var imag, elem, elem1;
  elem = $('.article-item');
  imag=elem.find('img');
  imag.remove();
  elem1=elem.find('h3');
  $('<img src="http://lorempixel.com/350/150/animals/" alt="Placeholder Image">').insertAfter(elem1);
}
$(imgChange);*/
function imgChange(){
 $('img').attr('src', 'http://lorempixel.com/350/150/animals/');
};
$(imgChange);
