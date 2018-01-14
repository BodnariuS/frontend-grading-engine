// Select color input
var color, row, column;
$('#colorPicker').on('change', function(){
var col;
col=$('#colorPicker').val();
color.text(col);
 //return color;
 });
// Select size input
$('#input_height').on('change', function(){
 var r;
 r=$('#input_height').val();
 row.text(r);
});
$('#input_width').on('change', function(){
 var c;
 c=$('#input_width').val();
 colom.text(val);
});

// When size is submitted by the user, call makeGrid()

 $('#sizePicker').on('click',function makeGrid(row, colom) {
  for (var i=1; i <= row; i++) {
      $('# pixel_canvas').append('<tr> </tr>')
          for (var j=1; j <= colom; j++){
              $('tr').append('<td> </td>')
          };
  };
};
                     
// Your code goes here!

