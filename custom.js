// JavaScript Document
var name, email,id;

function getData()
{
	name=document.getElementById("name").value;
	phone=document.getElementById("phone").value;
	address=document.getElementById("address").value;
	
	$("#submitPopup").popup("open"); // this will open the pop up
 
    $("#popupText").html("Hi " +name+", please verify your phone :"+phone +" and address : "+address+". Thanks."); //setting the value in the "popupText" id span
}
