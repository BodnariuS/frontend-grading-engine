// Select color input
var color, row, column;
color=$('#colorPicker').val();
// Select size input
row=$('#input_height').val();
colom=$('#input_width').val();
// When size is submitted by the user, call makeGrid()

 function makeGrid() {
  for (var i=1, i <= row, i++) {
      $('# pixel_canvas').append('<tr> </tr>')
          for (var j=1, j <= colom, j++){
              $('tr').append('<td> </td>')
          };
  };
};
// Your code goes here!

