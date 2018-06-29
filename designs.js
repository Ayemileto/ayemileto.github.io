// Declare all variables used
	var height, width, color, row, column, tr, td, table, id;

// When size is submitted by the user, call makeGrid()
	$("#sizePicker").submit(function(event){
	event.preventDefault();
	height= $("#inputHeight").val();
	width= $("#inputWeight").val();
	makeGrid(height, width);
	})


	function makeGrid(height, width) {
	
//clear previous table(Clears previous Grid In cases where user resubmit form without refreshing page)
	
	table=$("table");
	tr=table.find('tr');
	td=table.find('td');
	td.remove();
	tr.remove();
	
//construct Grid
	for (column=1; column<=height; column++){
	$("#pixelCanvas").append("<tr></tr>");
	for(row=1; row<=width; row++){
//Generate Unique Numeric Id for each td
	id=column+""+row;
			$("tr:last").append("<td onclick=coloring("+id+") id="+id+"></td>");
	}}}

	function coloring(id){
//check for color in cell
	if(document.getElementById(id).style.backgroundColor !=""){

//if a color already exist in the cell, Make it transparent
	document.getElementById(id).style.backgroundColor="";
	}	
	else{
	//if no color exist in the cell, set selected color
	color=document.getElementById("colorPicker").value;
	document.getElementById(id).style.backgroundColor=color;	 
}
}



