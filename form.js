/*JQuery Version*/


$(document).ready(function()
{
		  
		$("button.submit").click(function()
		{
			
           $.get('form.html', function(data)
		   {
		      
			    console.log(data);
				console.log($("#user").val());
				console.log($("#email").val());
				console.log($("#pass").val());
				console.log($("#repeat").val());
				
				
				if($("#pass").val() == $("#repeat").val())
				{
					console.log("Identical");
			    }
					
				else
				{
					console.log("Not Identical");
			    }
					

		   });
		   
	    });
		
});









/*JavaScript Version*/



function getData()
{
	
	var user = document.getElementById("user").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("pass").value;
	var repeatPassword = document.getElementById("repeat").value;
	
	
    console.log(user);
	console.log(email);
    console.log(password);
	console.log(repeatPassword);
	  
	  
	if(document.getElementById("pass") == document.getElementById("repeat"))
    {
		console.log("Passwords are similar.");
	}
	
	else
    {
		console.log("Please re-check password.");
	}
	  
	  
}







