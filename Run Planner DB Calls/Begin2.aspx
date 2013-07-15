<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Begin2.aspx.cs" Inherits="Begin2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Run Planner</title>
	<meta charset="utf-8"/>
    <meta name="description" content="Personalized running plans"/>
    <meta name="keywords" content="running, fitness, health, race, workout"/>
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/begin2.css"/>
	<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css"/>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/begin.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
</head>
<body>
    <form id="form1" runat="server" >
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
					</li>
					<li>
						<a href="about.html">ABOUT</a>
						<div class="ac_subitem">
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

			<div id="sliderOne">

				<div id="genderQuestion"> Are you male or female? </div> <br>

				<select id="genderBox">
				<option value=""> Please select </option> <option value="male"> Male </option> <option value="female"> Female </option> 
				</select> <br>

				<div id="numOfDaysQuestion"> In the past two weeks, how many times have you run? </div> <br>

				<select id="dropdown1" name="aa" onchange="Runner.numOfDays(this.value)">
				<option value=""> Please select </option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				</select>

				<br>

                <asp:Button id="buttonOne" runat="server" OnClientClick="Runner.submitClicked(); return false;" UseSubmitBehavior="false" Text="Submit"/>
				<%--<button id="submit" onclick ="Runner.submitClicked ()"> Submit </button>--%>
                   <%-- <asp:Button runat="server" id="blahButton" Text="Blahblahblah" OnClientClick="return false;"></asp:Button>--%>

			</div>	

			<!-- Old code (works but not normal way to do it)-->
		 	 <!-- <div><h2 id="dayLabel"> Day 1 </h2></div> -->

		 	 <!-- New code (works)-->

		 	<div id="questionGroupTwo">

		 		<div id="sliderTwo">

				 	 <div id="dayLabel"><h2>Day 1</h2></div>

			    	 <div id="timeQuestion"> How long did you run for? </div>
			      	
			    	 <select id="hoursBox" name="bb" onchange="Runner.numOfHours(this.value)">
			     	<option value=""> Hours </option>
			     	<option value="1"> 1 </option>
			     	<option value="2"> 2 </option>
			     	<option value="3"> 3 </option>
			     	<option value="4"> 4 </option>
			     	<option value="5"> 5 </option>
			     	</select>

			    	 <select id="minutesBox" name="cc" onchange="Runner.numOfMinutes(this.value)">
			     	<option value=""> Minutes </option>
			     	<option value="1"> 1 </option> <option value="2"> 2 </option> <option value="3"> 3 </option> <option value="4"> 4 </option> <option value="5"> 5 </option> 
			     	<option value="6"> 6 </option> <option value="7"> 7 </option> <option value="8"> 8 </option> <option value="9"> 9 </option> <option value="10"> 10 </option>
			 		<option value="11"> 11 </option> <option value="12"> 12 </option> <option value="13"> 13 </option> <option value="14"> 14 </option> <option value="15"> 15 
			 		</option> <option value="16"> 16 </option> <option value="17"> 17 </option> <option value="18"> 18 </option> <option value="19"> 19 </option> <option value="20"> 20 </option> <option value="21"> 21 </option> <option value="22"> 22 </option> <option value="23"> 23 </option> <option value="24"> 24 </option> <option value="25"> 25 </option> <option value="26"> 26 </option> <option value="27"> 27 </option> <option value="28"> 28 </option> <option value="29"> 29 </option> <option value="30"> 30 </option> <option value="31"> 31 </option> <option value="32"> 32 </option> <option value="33"> 33 </option> <option value="34"> 34 </option> <option value="35"> 35 </option> <option value="36"> 36 </option> <option value="37"> 37 </option> <option value="38"> 38 </option> <option value="39"> 39 </option> <option value="40"> 40 </option> <option value="41"> 41 </option> <option value="42"> 42 </option> <option value="43"> 43 </option> <option value="44"> 44 </option> <option value="45"> 45 </option> <option value="46"> 46 </option> <option value="47"> 47 </option> <option value="48"> 48 </option> <option value="49"> 49 </option> <option value="50"> 50 </option> <option value="51"> 51 </option> <option value="52"> 52 </option> 
			 		<option value="52"> 52 </option> <option value="53"> 53 </option> <option value="54"> 54 </option> <option value="55"> 55 </option> <option value="56"> 56  </option> <option value="57"> 57 </option> <option value="58"> 58 </option> <option value="59"> 59 </option> 
			 		</select>

			 		<select id="secondsBox" name="dd" onchange="Runner.numOfSeconds(this.value)">
			 		<option value=""> Seconds </option>
			     	<option value="1"> 1 </option> <option value="2"> 2 </option> <option value="3"> 3 </option> <option value="4"> 4 </option> <option value="5"> 5 </option> 
			     	<option value="6"> 6 </option> <option value="7"> 7 </option> <option value="8"> 8 </option> <option value="9"> 9 </option> <option value="10"> 10 </option>
			 		<option value="11"> 11 </option> <option value="12"> 12 </option> <option value="13"> 13 </option> <option value="14"> 14 </option> <option value="15"> 15 
			 		</option> <option value="16"> 16 </option> <option value="17"> 17 </option> <option value="18"> 18 </option> <option value="19"> 19 </option> <option value="20"> 20 </option> <option value="21"> 21 </option> <option value="22"> 22 </option> <option value="23"> 23 </option> <option value="24"> 24 </option> <option value="25"> 25 </option> <option value="26"> 26 </option> <option value="27"> 27 </option> <option value="28"> 28 </option> <option value="29"> 29 </option> <option value="30"> 30 </option> <option value="31"> 31 </option> <option value="32"> 32 </option> <option value="33"> 33 </option> <option value="34"> 34 </option> <option value="35"> 35 </option> <option value="36"> 36 </option> <option value="37"> 37 </option> <option value="38"> 38 </option> <option value="39"> 39 </option> <option value="40"> 40 </option> <option value="41"> 41 </option> <option value="42"> 42 </option> <option value="43"> 43 </option> <option value="44"> 44 </option> <option value="45"> 45 </option> <option value="46"> 46 </option> <option value="47"> 47 </option> <option value="48"> 48 </option> <option value="49"> 49 </option> <option value="50"> 50 </option> <option value="51"> 51 </option> <option value="52"> 52 </option> 
			 		<option value="52"> 52 </option> <option value="53"> 53 </option> <option value="54"> 54 </option> <option value="55"> 55 </option> <option value="56"> 56  </option> <option value="57"> 57 </option> <option value="58"> 58 </option> <option value="59"> 59 </option> 
			 		</select>

			 		<div id="distanceQuestion"> How far did you run (in miles)? </div>

			 		<form><input type="text" id="distanceBox"></form>

			 		<div id="feelingQuestion"> On a scale from 1 to 10, 10 being the best, how did <br> you feel during this workout? </div>

			 		<form id="feelingButtons" name="feelButtons"><input type="radio" name="feeling" id="feeling1" value="1">1</input> <input type="radio" name="feeling" id="feeling2" value="2">2</input> <input type="radio" name="feeling" id="feeling3" value="3">3</input> <input type="radio" name="feeling" id="feeling4" value="4">4</input> <input type="radio" name="feeling" id="feeling5" value="5">5</input> <input type="radio" name="feeling" id="feeling6" value="6">6</input> <input type="radio" name="feeling" id="feeling7" value="7">7</input> <input type="radio" name="feeling" id="feeling8" value="8">8</input> <input type="radio" name="feeling" id="feeling9" value="9">9</input> <input type="radio" name="feeling" id="feeling10" value="10">10   </input> 
			 		</form> 

			 		<div id="terrainQuestion"> What type of terrain did you run on? </div>

			 		<select id="terrainBox" name="ee">
			 			<option value=""> Please select </option> <option value="flat"> Flat </option> <option value="someHills"> Somewhat hilly </option> <option value="veryHilly"> Very hilly </option> <option value="beach"> Beach </option> 
			 		</select>	

			 		<br>
			 		<br>

			 		<button id="previousButton" onclick="Runner.previousClicked ()"> Previous </button>

                     <asp:Button runat="server" id="nextButton" OnClientClicked="Runner.nextClicked (); return false;" UseSubmitBehavior="false" EnableViewState="false" Text="Next" AutoPostBack="FALSE"></asp:Button>	
		 			<%--<button id="nextButton" onclick="Runner.nextClicked ()"> Next </button>	--%>

                    <asp:Button runat="server" id="finishButton" OnClientClicked="Runner.finishClicked (); return false;" UseSubmitBehavior="false" Text="Finish" AutoPostBack="FALSE"></asp:Button>
		 			<%--<button id="finishButton" onclick="Runner.finishClicked ()"> Finish </button>--%>

				</div> <!-- End of SliderTwo -->			 

				<div id="sliderThree">

			 		<div id="planQuestion"> What is your goal for running? </div>

			 		<select id="planBox">
			 			<option value=""> Please select </option> <option value="fun"> I want to run for my own enjoyment and health </option> <option value="competitive"> I want to eventually run races </option> 
			 		</select>	

                    <asp:Button runat="server" id="makeMyPlan" OnClientClicked="Runner.makeMyPlanClicked (); return false;" UseSubmitBehavior="false" AutoPostBack="FALSE" Text="Make my plan!"></asp:Button>
					<%--<button id="makeMyPlanButton" onclick="Runner.makeMyPlanClicked ()"> Make my plan! </button> 			 	--%>	

			 	</div>	

			 		<div id="plan">	

					 	<div id="planIntro"> Here is your new workout plan! </div>


					 	<div id="planLeft">

					 		<h2 id="planWeekOne"> Week 1 </h2>

					 		<div id="sunday1"> Sunday: Rest </div>

					 		<div id="monday1"> Monday: Rest </div> 

					 		<div id="tuesday1"> Tuesday: </div>

					 		<div id="wednesday1"> Wednesday: Rest </div>

					 		<div id="thursday1"> Thursday: </div>

					 		<div id="friday1"> Friday: Rest </div>

					 		<div id="saturday1"> Saturday: </div> 

					 	</div>
					 	
					 	<div id="planRight">	

					 		<h2 id="planWeekTwo"> Week 2 </h2>

					 		<div id="sunday2"> Sunday: Rest </div>

					 		<div id="monday2"> Monday: Rest </div> 

					 		<div id="tuesday2"> Tuesday: </div>

					 		<div id="wednesday2"> Wednesday: Rest </div>

					 		<div id="thursday2"> Thursday: </div>

					 		<div id="friday2"> Friday: Rest </div>

					 		<div id="saturday2"> Saturday: </div>

					 	</div>	

					 </div>	

			 		

		 		

		 	</div> <!-- End of questionGroupTwo -->

		 		

 		</div> <!-- End of mainBox -->

 			<div id="helpBox">
		 		<div id ="help1">
		 			<h1>Help</h1>
		 			<p> Enter your gender and the number of days you've ran in the past two weeks. If you haven't ran at all, select one day. </p>
		 		</div>

		 		<div id ="help2">
		 			<h1>Help</h1>
		 			<p> Your feedback on how you felt is very important. A rating of 5 means the workout was not too easy and not too challenging. A rating of 1 means you could barely finish or didn't finish the workout, and a rating of 10 means the workout was extremely easy. </p>
		 		</div>
            </div>

    </form>
</body>
</html>
