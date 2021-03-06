﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login2.aspx.cs" Inherits="Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Run Planner</title>
		<meta charset="utf-8"/>
        <meta name="description" content="Personalized running plans"/>
        <meta name="keywords" content="running, fitness, health, race, workout"/>
		<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" type="text/css" href="css/login2.css"/>
		<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css"/>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="js/begin.js"></script>
		<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    
        <div id="ac_background" class="ac_background">
			<img class="ac_bgimage" src="images/RunningSunset.jpeg" alt="Background"/>
			<div class="ac_overlay"></div>
			<div class="ac_loading"></div>
		</div>
		<div id="ac_content" class="ac_content">
			<h1><span>RUN</span>PLANNER</h1>
			<div class="ac_menu">
				<ul>
					<li>
						<a href="index.html">HOME</a>
						<div class="ac_subitem">
							<span class="ac_close"></span>
							
						</div>
						<a href="about.html">ABOUT</a></li>
					<li>
						&nbsp;<div class="ac_subitem">
							<span class="ac_close"></span>
							
						</div>
					</li>
					<li>
						<a href="begin.html">START</a>
						<div class="ac_subitem">
							<span class="ac_close"></span>
							
						</div>
					</li>
					<li>
						<a href="contact.html">CONTACT</a>
						<div class="ac_subitem">
							<span class="ac_close"></span>
							
						</div>
					</li>
					
				</ul>
			</div>
		</div>

		<div id="mainBox">

			<asp:Login ID="Login1" runat="server" Height="254px" Width="426px" OnClick="Login1_Authenticate" OnAuthenticate="Login1_Authenticate1">
            </asp:Login>


 		</div> <!-- End of mainBox -->

 			<div id="helpBox">
		 		<div id ="help1">
		 			<h1>Help</h1>
		 			<p> If you create an account, you can log all of your workouts and keep track of your progress. </p>
		 		</div>

		 		
            </div>
        
        
        
        
    <div>
    
    </div>
        
    </form>
</body>
</html>
