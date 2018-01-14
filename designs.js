function makeGrid() {
// Select color input
var row, column, table;
// Select size input
row=$('#input_height').val();
column=$('#input_width').val();
//select table
table=$('#sizePicker')
// create row's
  for (var i=0; i < row; i++) {
      table.append('<tr></tr>');
   //create colms
          for (var j=0; j < column; j++){
              table.children().last().append('<td class="colors"></td>')
          };
  };
// When size is submitted by the user, call makeGrid()
table.on('click', 'td', function() {
//selecting color
 var color=$('#colorPicker').val();
  // to the clicked <td> element puting the background color of var color
  $('td').css('background-color', color);
  //la <td> trebuie sa ii adaugam atributul bgcolor care sa fie egal cu val color
});
}
