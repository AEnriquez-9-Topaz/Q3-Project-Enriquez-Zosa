<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Q3-Project 1</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Charm:wght@400;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Delius&family=Ephesis&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lexend:wght@100..900&family=Lobster&family=Lora:ital,wght@0,400..700;1,400..700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rouge+Script&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Delius&family=Ephesis&family=Lexend:wght@100..900&family=Lobster&family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rouge+Script&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
	<nav class="navbar navbar-expand-sm He cen col-sm-12">
		<div class="container-fluid">
		    <a class="navbar-brand col-sm-4" href=""><img src="https://i.ibb.co/NnvBgHh/Bites-removebg-preview.png" alt="logo"  class="d-inline-block align-top nega"></a>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
		    	<span class="navbar-toggler-icon"></span>
		    </button>

		    <div class="collapse navbar-collapse col-sm-4" id="collapsibleNavbar">
		    	 <ul class="nav nav-tabs mx-auto" role="tablist">
		       		<li class="nav-item mx-auto">
	   							<a class="nav-link" href="index.html" >Home</a>
	      			</li>
		       		<li class="nav-item mx-auto">
		         			 <a class="nav-link" href="schedule.html" >Transit Schedule</a>
		        	</li>  
		       		<li class="nav-item mx-auto">
		          		<a class="nav-link" href="Contact.html">Contact Us</a>
		       	 	</li>
		      	</ul>
		    </div>

		    <div class="wrapper sc col-sm-4" >
					<form action="/search" method="get">
			    	<input type="search"  placeholder="Search.." name="query">
			      <button type="submit">Submit</button>
			    </form>
	  		</div>
	  	</div>
	</nav>
	<br /><br /><br />
	
	<div class="row">
			<h1 class="Fancy"> Ticketing Center! </h1>
			<hr /> <br />
			<div class="Personal col-sm-4">
			   <a href="https://ibb.co/ch4BHttx"><img src="https://i.ibb.co/xqxk0GG3/map.png" alt="map" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>forum image hosting</a><br />
			</div>

			<div class="Ticket col-sm-4">
				<details> 
				   <summary>Ticket Price</summary>
				   <em> Choose your ticket price </em>
				   <hr />
				   <form action="" placeholder="Seats">
				   		<label> Leaving From: </label>
					    <select name="from" id="from" class="col-sm-12 form-control">
		 			    	<option disabled="true" selected="true" class="cen"> Locations </option>
		   				   	<option value="Roosevelt">Roosevelt</option>
		   		 			<option value="Balintawak">Balintawak</option>
		    				<option value="Monumento">Monumento</option>
		   				   	<option value="5th Avenue">5th Avenue</option>
		   		 			<option value="R. Papa">R. Papa</option>
		    				<option value="Abad Santos">Abad Santos</option>
		   				   	<option value="Blumentritt">Blumentritt</option>
		   		 			<option value="Tayuman">Tayuman</option>
		    				<option value="Bambang">Bambang</option>
		   				   	<option value="Doroteo Jose">Doroteo Jose</option>
		   		 			<option value="Carriedo">Carriedo</option>
		    				<option value="Central Terminal">Central Terminal</option>
		   				   	<option value="United Nations">United Nations</option>
		   		 			<option value="Pedro Gil">Pedro Gil</option>
		    				<option value="Quirino">Quirino</option>
		   				   	<option value="Vito Cruz">Vito Cruz</option>
		   		 			<option value="Libertad">Libertad</option>
		    				<option value="EDSA">EDSA</option>
		    				<option value="Baclaran">Baclaran</option>
	  					</select>
	  					<br />
	  					<label> Going to: </label>
					    <select name="to" id="to" class="col-sm-12 form-control">
		 			    	<option disabled="true" selected="true" class="cen"> Going to </option>
		   				   	<option value="Roosevelt">Roosevelt</option>
		   		 			<option value="Balintawak">Balintawak</option>
		    				<option value="Monumento">Monumento</option>
		   				   	<option value="5th Avenue">5th Avenue</option>
		   		 			<option value="R. Papa">R. Papa</option>
		    				<option value="Abad Santos">Abad Santos</option>
		   				   	<option value="Blumentritt">Blumentritt</option>
		   		 			<option value="Tayuman">Tayuman</option>
		    				<option value="Bambang">Bambang</option>
		   				   	<option value="Doroteo Jose">Doroteo Jose</option>
		   		 			<option value="Carriedo">Carriedo</option>
		    				<option value="Central Terminal">Central Terminal</option>
		   				   	<option value="United Nations">United Nations</option>
		   		 			<option value="Pedro Gil">Pedro Gil</option>
		    				<option value="Quirino">Quirino</option>
		   				   	<option value="Vito Cruz">Vito Cruz</option>
		   		 			<option value="Libertad">Libertad</option>
		    				<option value="EDSA">EDSA</option>
		    				<option value="Baclaran">Baclaran</option>
	  					</select>
	  					<br />
	  					<label> Options: </label>
					    <select name="option" id="option" class="col-sm-12 form-control">
		 			    	<option disabled="true" selected="true" class="cen"> Options </option>
		   				   	<option value="None">None</option>
		   		 			<option value="Student">Student</option>
		    				<option value="Patron">Patron</option>
	  					</select>
 				   </form>
				    <br />
				    <button type="button" id="forprice" onclick="Price()"class="col-auto btn btn-warning btn-md"onmouseover="mouseOver()" onmouseout="mouseOut()"> Check Price </button>
				    <br /> <br />
				</details>
			</div>

			<div class="Personal col-sm-4">
				<h1> Your Price is: </h1>
					<h3 id="price"> <i> Please buy a ticket</i></h3> 
			</div>
		</div>	

	<br /><br /><br /><br />
	<div class="footer">
	<a href="https://github.com/AEnriquez-9-Topaz "> <p> <i> 2025 | Alejandro Enriquez & Ivy Zosa | 9-Topaz </i> </p> </a>
	</div> 
	<script src="main.js"></script>
</body>
</html>
