// Select color input
var color, row, column;
$('#colorPicker').on('change', function(){
color=$('#colorPicker').val();
 return color;
 });
// Select size input
$('#input_height').on('change', function(){
 row=$('#input_height').val();
 return row;
});
$('#input_width').on('change', function(){
 colom=$('#input_width').val();
 return colom;
});

// When size is submitted by the user, call makeGrid()

 function makeGrid() {
  for (var i=1; i =< row; i++) {
      $('# pixel_canvas').append('<tr> </tr>')
          for (var j=1; j =< colom; j++){
              $('tr').append('<td> </td>')
          };
  };
};
// Your code goes here!

