$(document).ready(function() {
				var $ac_background	= $('#ac_background'),
				$ac_bgimage		= $ac_background.find('.ac_bgimage'),
				$ac_loading		= $ac_background.find('.ac_loading'),
				
				$ac_content		= $('#ac_content'),
				$title			= $ac_content.find('h1'),
				$menu			= $ac_content.find('.ac_menu'),
				$mainNav		= $menu.find('ul:first'),
				$menuItems		= $mainNav.children('li'),
				totalItems		= $menuItems.length,
				$ItemImages		= new Array();

				// Run Planner variables
				// $("#dayLabel").hide();
				// $("#timeQuestion").hide();
				// $("#hoursBox").hide();
				// $("#minutesBox").hide();
				// $("#secondsBox").hide();
				// $("#nextButton").hide();
				$("#finishButton").hide();	
				// $("#previousButton").hide();
				// $("#distanceQuestion").hide();
				// $("#distanceBox").hide();
				// $("#feelingQuestion").hide();
				// $("#feelingButtons").hide();
				// $("#terrainQuestion").hide();
				// $("#terrainBox").hide();
				// $("#planQuestion").hide();
				// $("#planBox").hide();
				$("#makeMyPlanButton").hide();
				$("#plan").hide();
				// $("#planIntro").hide();
				// $("#planWeekOne").hide();
				// $("#sunday1").hide();
				// $("#monday1").hide();
				// $("#tuesday1").hide();
				// $("#wednesday1").hide();
				// $("#thursday1").hide();
				// $("#friday1").hide();
				// $("#saturday1").hide();
				// $("#planWeekTwo").hide();
				// $("#sunday2").hide();
				// $("#monday2").hide();
				// $("#tuesday2").hide();
				// $("#wednesday2").hide();
				// $("#thursday2").hide();
				// $("#friday2").hide();
				// $("#saturday2").hide();
				$("#help2").hide();
				$("#helpBox").hide();
				$("#sliderTwo").hide();
				$("#sliderThree").hide();	

				$("#helpBox").toggle("fold", 1000);
				/* 
				for this menu, we will preload all the images. 
				let's add all the image sources to an array,
				including the bg image
				*/
				// $menuItems.each(function(i) {
				// 	$ItemImages.push($(this).children('a:first').attr('href'));
				// });
				$ItemImages.push($ac_bgimage.attr('src'));
					  
				
				var Menu 			= (function(){
					var init				= function() {
						loadPage();
						initWindowEvent();
					},
					loadPage			= function() {
						/*
							1- loads the bg image and all the item images;
							2- shows the bg image;
							3- shows / slides out the menu;
							4- shows the menu items;
							5- initializes the menu items events
						 */
						// $ac_loading.show();//show loading status image
						$.when(loadImages()).done(function(){
							$.when(showBGImage()).done(function(){
								//hide the loading status image
								$ac_loading.hide();
								$.when(slideOutMenu()).done(function(){
										$.when(toggleMenuItems('up')).done(function(){
										initEventsSubMenu();
									});
								});
							});
						});
					},
					showBGImage			= function() {
						return $.Deferred(
						function(dfd) {
							//adjusts the dimensions of the image to fit the screen
							adjustImageSize($ac_bgimage);
							$ac_bgimage.fadeIn(1000, dfd.resolve);
						}
					).promise();
					},
					slideOutMenu		= function() {
						/* calculate new width for the menu */
						var new_w	= $(window).width() - $title.outerWidth(true);
						return $.Deferred(
						function(dfd) {
							//slides out the menu
							$menu.stop()
							.animate({
								width	: new_w + 'px'
							}, 700, dfd.resolve);
						}
					).promise();
					},
						/* shows / hides the menu items */
						toggleMenuItems		= function(dir) {
						return $.Deferred(
						function(dfd) {
							/*
							slides in / out the items. 
							different animation time for each one.
							*/
							$menuItems.each(function(i) {
										var $el_title	= $(this).children('a:first'),
											marginTop, opacity, easing;
										if(dir === 'up'){
											marginTop	= '0px';
											opacity		= 1;
											easing		= 'easeOutBack';
										}
										else if(dir === 'down'){
											marginTop	= '60px';
											opacity		= 0;
											easing		= 'easeInBack';
						}
								$el_title.stop()
								.animate({
													marginTop	: marginTop,
													opacity		: opacity
												 }, 200 + i * 200 , easing, function(){
									if(i === totalItems - 1)
										dfd.resolve();
								});
							});
						}
					).promise();
					},
					// initEventsSubMenu	= function() {
					// 	$menuItems.each(function(i) {
					// 		var $item		= $(this), // the <li>
					// 		$el_title	= $item.children('a:first'),
					// 		el_image	= $el_title.attr('href'),
					// 		$sub_menu	= $item.find('.ac_subitem'),
					// 		$ac_close	= $sub_menu.find('.ac_close');
							
					// 		/* user clicks one item : appetizers | main course | desserts | wines | specials */
					// 		$el_title.bind('click.Menu', function(e) {
					// 				$.when(toggleMenuItems('down')).done(function(){
					// 				openSubMenu($item, $sub_menu, el_image);
					// 			});
					// 			return false;
					// 		});
					// 		/* closes the submenu */
					// 		$ac_close.bind('click.Menu', function(e) {
					// 			closeSubMenu($sub_menu);
					// 			return false;
					// 		});
					// 	});
					// },
					// openSubMenu			= function($item, $sub_menu, el_image) {
					// 	$sub_menu.stop()
					// 	.animate({
					// 		height		: '400px',
					// 		marginTop	: '-200px'
					// 	}, 400, function() {
					// 					//the bg image changes
					// 		showItemImage(el_image);
					// 	});
					// },
					// 	/* changes the background image */
					// showItemImage		= function(source) {
					// 		//if its the current one return
					// 	if($ac_bgimage.attr('src') === source)
					// 		return false;
								
					// 	var $itemImage = $('<img src="'+source+'" alt="Background" class="ac_bgimage"/>');
					// 	$itemImage.insertBefore($ac_bgimage);
					// 	adjustImageSize($itemImage);
					// 	$ac_bgimage.fadeOut(1500, function() {
					// 		$(this).remove();
					// 		$ac_bgimage = $itemImage;
					// 	});
					// 	$itemImage.fadeIn(1500);
					// },
					// closeSubMenu		= function($sub_menu) {
					// 	$sub_menu.stop()
					// 	.animate({
					// 		height		: '0px',
					// 		marginTop	: '0px'
					// 	}, 400, function() {
					// 		//show items
					// 					toggleMenuItems('up');
					// 	});
					// },
						/*
						on window resize, ajust the bg image dimentions,
						and recalculate the menus width
						*/
					initWindowEvent		= function() {
						/* on window resize set the width for the menu */
						$(window).bind('resize.Menu' , function(e) {
							adjustImageSize($ac_bgimage);
							/* calculate new width for the menu */
							var new_w	= $(window).width() - $title.outerWidth(true);
							$menu.css('width', new_w + 'px');
						});
					},
						/* makes an image "fullscreen" and centered */
					adjustImageSize		= function($img) {
						var w_w	= $(window).width(),
						w_h	= $(window).height(),
						r_w	= w_h / w_w,
						i_w	= $img.width(),
						i_h	= $img.height(),
						r_i	= i_h / i_w,
						new_w,new_h,
						new_left,new_top;
							
						if(r_w > r_i){
							new_h	= w_h;
							new_w	= w_h / r_i;
						}
						else{
							new_h	= w_w * r_i;
							new_w	= w_w;
						}
							
						$img.css({
							width	: new_w + 'px',
							height	: new_h + 'px',
							left	: (w_w - new_w) / 2 + 'px',
							top		: (w_h - new_h) / 2 + 'px'
						});
					},
						/* preloads a set of images */
					loadImages			= function() {
						return $.Deferred(
						function(dfd) {
							var total_images 	= $ItemImages.length,
							loaded			= 0;
							for(var i = 0; i < total_images; ++i){
								$('<img/>').load(function() {
									++loaded;
									if(loaded === total_images)
										dfd.resolve();
								}).attr('src' , $ItemImages[i]);
							}
						}
					).promise();
					};
						
					return {
						init : init
					};
				})();
			
				/*
			call the init method of Menu
				 */
				Menu.init();
});

var Runner = {
	currentNumOfDays: 0,
	currentNumOfHours: 0,
	currentNumOfMinutes: 0,
	currentNumOfSeconds: 0,
	times:[],
	distances:[],
	feelings:[],
	terrains:[],
	mileTimes:[],
	adjustedMileTimes:[],
	currentDayIndex: 0,
	totalMileTime: 0,
	averageMileTime: 0,
	distanceSum: 0,
	startingWeeklyDistance: 0, 
	planWeekOneDistance: 0,
	planWeekTwoDistance: 0,
	tuesdayOneMiles: 0,
	thursdayOneMiles: 0,
	saturdayOneMiles: 0,
	tuesdayTwoMiles: 0,
	thursdayTwoMiles: 0,
	saturdayTwoMiles: 0,
	overTwelveTotalMiles: 0,
	overTwelveLeftoverMiles: 0,

	 numOfDays: function (days)
	   {
		if (days === "") return;
		this.currentNumOfDays = parseInt(days)	;
			

	},

	feelingsButtonsDefault: function () {

		var feelingButtons = $("#feelingButtons input:radio");
		if (feelingButtons.filter(':checked').length === 0) {
			$("#feeling5").attr('checked', true);
			feelingButtons.refresh();
		}
		else {
			var feelingsAnswer = feelingButtons.filter(':checked').val();
			this.feelings[this.currentDayIndex] = feelingsAnswer;
		}	

	},

	submitClicked: function () {

		// $("#dayLabel").show();
		// $("#timeQuestion").show();
		// $("#hoursBox").show();
		// $("#minutesBox").show();
		// $("#secondsBox").show();
		// $("#nextButton").show();
		// $("#previousButton").show();
		// $("#distanceQuestion").show();
		// $("#distanceBox").show();
		// $("#feelingQuestion").show();
		// $("#feelingButtons").show();
		// $("#terrainQuestion").show();
		// $("#terrainBox").show();


		$("#sliderOne").hide("slide", {direction: "left"}, 700);
		$("#sliderTwo").show("slide", {direction: "right"}, 700);
		$("#previousButton").attr( "disabled", true );


		if ( this.currentNumOfDays === 1 ) {
			$("#nextButton").hide();
			$("#finishButton").show();
		}

		// $("#numOfDaysQuestion").hide();
		// $("#dropdown1").hide();
		// $("#submit").hide();
		// $("#genderQuestion").hide();
		// $("#genderBox").hide();
		

		// Uses a callback function 		
		$("#helpBox").toggle("fold", 1000, function () {
			$("#help1").hide();
			$("#help2").show();
			$("#helpBox").toggle("fold", 1000);
		});

		for (var i=0; i < this.currentNumOfDays; i++) {


			this.times.push([0,0,0]);
			this.distances.push(0.0);
			this.feelings.push(0);
			this.terrains.push(0);
			this.mileTimes.push(0);
			this.adjustedMileTimes.push(0);

		}		

		this.feelingsButtonsDefault ();			

	},

	numOfHours: function (hours) {
		if (hours === "") return;
		this.currentNumOfHours = parseInt(hours) ;
	},

	numOfMinutes: function (minutes) {
		if (minutes === "") return;
		this.currentNumOfMinutes = parseInt(minutes) ;
	},

	numOfSeconds: function (seconds) {
		if (seconds === "") return; 
		this.currentNumOfSeconds = parseInt(seconds) ;	
	},

	finishClicked: function() {

		$("#sliderTwo").hide("slide", {direction: "left"}, 600);
		$("#finishButton").hide("slide", {direction: "left"}, 600, function () {
			$("#sliderThree").show("slide", {direction: "right"}, 700);
			
			$("#makeMyPlanButton").show("slide", {direction: "right"}, 700);
		});

		


		// $("#dayLabel").hide();
		// $("#timeQuestion").hide();
		// $("#hoursBox").hide();
		// $("#minutesBox").hide();
		// $("#secondsBox").hide();
		// $("#nextButton").hide();
		// $("#finishButton").hide();	
		// $("#previousButton").hide();
		// $("#distanceQuestion").hide();
		// $("#distanceBox").hide();
		// $("#feelingQuestion").hide();
		// $("#feelingButtons").hide();
		// $("#terrainQuestion").hide();
		// $("#terrainBox").hide();

		this.times[this.currentDayIndex][0] = this.currentNumOfHours;
		this.times[this.currentDayIndex][1] = this.currentNumOfMinutes;
		this.times[this.currentDayIndex][2] = this.currentNumOfSeconds;

		var distanceAnswer = $("#distanceBox").val() === "" ? 0.0 : parseFloat($("#distanceBox").val());

		// var distanceAnswer = parseFloat($("#distanceBox").val());
		this.distances[this.currentDayIndex] = distanceAnswer;

		var terrainAnswer = $("#terrainBox").val() === "" ? 0 : $("#terrainBox").val();
		this.terrains[this.currentDayIndex] = terrainAnswer;	

		this.feelingsButtonsDefault ();

	},

	previousClicked: function () {

		if (this.currentDayIndex + 1 === this.currentNumOfDays) {
			
			$("#finishButton").hide();
			$("#nextButton").show();			
		}	

		$("#sliderTwo").hide("slide", {direction: "right"}, 600);
		$("#sliderTwo").show("slide", {direction: "left"}, 700);

		if (this.currentDayIndex - 1 === 0) {
			$("#previousButton").attr("disabled", true);
		}
		$("#dayLabel").text("Day " + this.currentDayIndex);

		this.times[this.currentDayIndex][0] = this.currentNumOfHours;
		this.times[this.currentDayIndex][1] = this.currentNumOfMinutes;
		this.times[this.currentDayIndex][2] = this.currentNumOfSeconds;

		var distanceAnswer = $("#distanceAnswer").val() === "" ? 0.0 : parseFloat($("#distanceAnswer").val());	

		this.currentDayIndex -= 1;

		$("#hoursBox").val(this.times[this.currentDayIndex][0]);
		$("#minutesBox").val(this.times[this.currentDayIndex][1]);
		$("#secondsBox").val(this.times[this.currentDayIndex][2]);

		this.times[this.currentDayIndex][0] === 0 ? $("#hoursBox").val(""):$("#hoursBox").val(this.times[this.currentDayIndex][0]);
		this.times[this.currentDayIndex][1] === 0 ? $("#minutesBox").val(""):$("#minutesBox").val(this.times[this.currentDayIndex][1]);
		this.times[this.currentDayIndex][2] === 0 ? $("#secondsBox").val(""):$("#secondsBox").val(this.times[this.currentDayIndex][2]);	

		this.distances[this.currentDayIndex] === 0.0 ? $("#distanceBox").val(""):$("#distanceBox").val(this.distances[this.currentDayIndex]);

		this.terrains[this.currentDayIndex] === 0 ? $("#terrainBox").val(""):$("#terrainBox").val(this.terrains[this.currentDayIndex]);

	},

	makeMyPlanClicked: function () {
		var genderAnswer = $("#genderBox").val() === "" ? 0 : $("#genderBox").val();
		var planAnswer = $("#planBox").val() === "" ? 0 : $("#planBox").val();
		// document.write(this.currentNumOfDays);


		$("#sliderThree").hide("slide", {direction: "left"}, 600);

		// Old
		// $("#planBox").hide();
		// $("#makeMyPlanButton").hide();
		// $("#planQuestion").hide();
		
		$("#helpBox").toggle("fold", 1000, function () {
			$("#mainBox").animate({width: "75%"}, 600, function () {
				$("#plan").fadeIn("slow");
			});
		});



		// At this point NumOfDays equals the number of days selected and currentDayIndex equals one minus that
		
		// document.write(planAnswer);
		// document.write(genderAnswer);
		// document.write(this.distances[1]);

		for (var i=0; i < this.mileTimes.length; i++) {
			this.mileTimes[i] = (((this.times[i][0]*3600) + (this.times[i][1]*60) + (this.times[i][2])) / this.distances[i]);
		}	

		for (var i=0; i < this.adjustedMileTimes.length; i++) {
			switch (this.terrains[i]) {
				case "someHills":
					this.mileTimes[i] = this.mileTimes[i] - 2;
					break;
				case "veryHilly":
					this.mileTimes[i] = this.mileTimes[i] - 3;
					break;
				case "beach":
					this.mileTimes[i] = this.mileTimes[i] - 5;
					break;		
			}

			switch (this.feelings[i]) {
				case "10":
					this.mileTimes[i] = this.mileTimes[i] - 45;
					break;
				case "9":
					this.mileTimes[i] = this.mileTimes[i] - 40;
					break;
				case "8":
					this.mileTimes[i] = this.mileTimes[i] - 30;
					break;
				case "7":
					this.mileTimes[i] = this.mileTimes[i] - 15;
					break;
				case "6":
					this.mileTimes[i] = this.mileTimes[i] - 5;
					break;
				case "5":
					this.mileTimes[i] = this.mileTimes[i] - 0;
					break;
				case "4":
					this.mileTimes[i] = this.mileTimes[i] + 5;
					break;
				case "3":
					this.mileTimes[i] = this.mileTimes[i] + 15;
					break;
				case "2":
					this.mileTimes[i] = this.mileTimes[i] + 45;
					break;
				case "1":
					this.mileTimes[i] = this.mileTimes[i] + 70;
					break;		
			}

			this.adjustedMileTimes[i] = this.mileTimes[i];
		}

		for (var i=0; i < this.adjustedMileTimes.length; i++) {
			this.totalMileTime = this.totalMileTime + this.adjustedMileTimes[i];	
		}

		this.averageMileTime = this.totalMileTime / this.adjustedMileTimes.length;

		for (var i=0; i < this.distances.length; i++) {
			this.distanceSum = this.distanceSum + this.distances[i];	
		}

		this.startingWeeklyDistance = this.distanceSum / 2;
		this.startingWeeklyDistance = Math.round(this.startingWeeklyDistance);

		if ($.inArray("1", this.feelings) === -1 && $.inArray("2", this.feelings) === -1 && $.inArray("3", this.feelings) === -1 && $.inArray("4", this.feelings) === -1) {
			switch (planAnswer) {
				case "fun":
					this.planWeekOneDistance = this.startingWeeklyDistance + 0.5;
					this.planWeekTwoDistance = this.startingWeeklyDistance + 1;
					break;
				case "competitive":
					this.planWeekOneDistance = this.startingWeeklyDistance + 1;
					this.planWeekTwoDistance = this.startingWeeklyDistance + 2;
					break;	
				}
			}
		else {
			this.planWeekOneDistance = this.startingWeeklyDistance;
			this.planWeekTwoDistance = this.startingWeeklyDistance;
			}	

		var goalTime = function (totalSeconds) {
			var result = "";
			var totalSecs = totalSeconds; 
			var goalHours = Math.floor(totalSecs / 3600);
			totalSecs = totalSecs - goalHours*3600;
			var goalMinutes = Math.floor(totalSecs / 60);
			var goalSeconds = totalSecs - goalMinutes*60;

			if (goalHours > 0) {
				result = " " + goalHours + " hours, " + goalMinutes + "minutes, and " + Math.round(goalSeconds);
				return result;
			}

			else 
			{
				result = " " + goalMinutes + " minutes and " + Math.round(goalSeconds);
				return result;
			}

		}	

		// Start code for first week plan 	
		if (this.planWeekOneDistance < 3) {
			$("#tuesday1").text("Tuesday: Rest");	
			$("#thursday1").text("Thursday: Run " + (this.planWeekOneDistance / 2) + " miles. It should take you " + goalTime((this.planWeekOneDistance/2)*this.averageMileTime) + " seconds.");
			$("#saturday1").text("Saturday: Run " + (this.planWeekOneDistance / 2) + " miles. It should take you " + goalTime((this.planWeekOneDistance/2)*this.averageMileTime) + " seconds.");
			
		}	

		else if (this.planWeekOneDistance < 6) {
			switch (this.planWeekOneDistance) {
				case 3:
					this.tuesdayOneMiles = 1;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 1;
					break;
				case 3.5:
					this.tuesdayOneMiles = 1;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 1.5;
					break;
				case 4:
					this.tuesdayOneMiles = 1; 
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2;
					break;	
				case 4.5:
					this.tuesdayOneMiles = 1.5;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2;
					break;	
				case 5:
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2;
					break;
				case 5.5:
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2.5;
					break;					
			}

			$("#tuesday1").text("Tuesday: Run " + this.tuesdayOneMiles + " miles. It should take you about " + goalTime(this.tuesdayOneMiles*this.averageMileTime) + " seconds.");
			$("#thursday1").text("Thursday: Run " + this.thursdayOneMiles + " miles. It should take you about " + goalTime(this.thursdayOneMiles*this.averageMileTime) + " seconds.");
			$("#saturday1").text("Saturday: Run " + this.saturdayOneMiles + " miles. It should take you about " + goalTime(this.saturdayOneMiles*this.averageMileTime) + " seconds.");
		}	

		else if (this.planWeekOneDistance < 12.5 && planAnswer === "competitive") {
			switch (this.planWeekOneDistance) {
				case 6:
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2;
					break;
				case 6.5: 
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2.5;
					break;	
				case 7:
					this.tuesdayOneMiles = 3;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2;
					break;	
				case 7.5:
					this.tuesdayOneMiles = 3;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2.5;
					break;	
				case 8: 
					this.tuesdayOneMiles = 4;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2;
					break;	
				case 8.5:
					this.tuesdayOneMiles = 4;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2.5;
					break;		
				case 9:
					this.tuesdayOneMiles = 4;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 3;
					break;	
				case 9.5: 
					this.tuesdayOneMiles = 4.5;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 3;
					break;	
				case 10: 
					this.tuesdayOneMiles = 5;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 3;
					break;	
				case 10.5:
					this.tuesdayOneMiles = 5;
					this.thursdayOneMiles = 2.5;
					this.saturdayOneMiles = 3;
					break;	
				case 11: 
					this.tuesdayOneMiles = 5.5;
					this.thursdayOneMiles = 2.5;
					this.saturdayOneMiles = 3;
					break;	
				case 11.5:
					this.tuesdayOneMiles = 5.5;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 4;
					break;	
				case 12:
					this.tuesdayOneMiles = 6;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 4;
					break;		
				}

			$("#tuesday1").text("Tuesday: Run " + this.tuesdayOneMiles + " miles. It should take you about " + goalTime(this.tuesdayOneMiles*this.averageMileTime) + " seconds.");
			$("#thursday1").text("Thursday: Run " + this.thursdayOneMiles + " miles. It should take you about " + goalTime(this.thursdayOneMiles*this.averageMileTime) + " seconds.");
			$("#saturday1").text("Saturday: Do " + this.saturdayOneMiles + " mile repeats on a track or something with reliable mile markers. Your target time for each mile is " + goalTime(this.averageMileTime - 70) + " seconds.");

			}

		else if (this.planWeekOneDistance > 12) {
			this.tuesdayOneMiles = 6;
			this.thursdayOneMiles = 2;
			this.saturdayOneMiles = 4;
			this.overTwelveTotalMiles = this.planWeekOneDistance;
			this.overTwelveLeftoverMiles = this.overTwelveTotalMiles - 12;

			for (var i=0; i < 100; i++) {
				if (this.overTwelveLeftoverMiles < 0.5) {
					break;
				}
				this.tuesdayOneMiles = this.tuesdayOneMiles + 0.5;
				this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;

				if (this.overTwelveLeftoverMiles < 0.5) {
					break;
				}
				this.thursdayOneMiles = this.thursdayOneMiles + 0.5;
				this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;

				if (this.overTwelveLeftoverMiles < 0.5) {
					break;
				}
				this.saturdayOneMiles = this.saturdayOneMiles + 0.5;
				this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;
			}

			// The code below does not work
			// for (var milesRemaining = this.overTwelveLeftoverMiles; milesRemaining > 0; milesRemaining - 0.5) {
			// 	if (this.overTwelveLeftoverMiles > 0) {
			// 		this.tuesdayOneMiles = this.tuesdayOneMiles	+ 0.5;
			// 		this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;
			// 		milesRemaining - 0.5;
			// 	}

			// 	if (this.overTwelveLeftoverMiles > 0) {
			// 		this.thursdayOneMiles = this.thursdayOneMiles + 0.5;
			// 		this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;
			// 		milesRemaining - 0.5;
			// 	}
			// 	if (this.overTwelveLeftoverMiles > 0) {
			// 		this.saturdayOneMiles = this.saturdayOneMiles + 0.5;
			// 		this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;
			// 	}
			// }



			// for (; this.overTwelveLeftoverMiles > 0; this.overTwelveLeftoverMiles - 0.5) {
				
			// 	if (this.overTwelveLeftoverMiles > 0) {
			// 		this.tuesdayOneMiles = this.tuesdayOneMiles + 0.5;
			// 		this.overTwelveLeftoverMiles - 0.5;	
			// 	}
				

			// 	if (this.overTwelveLeftoverMiles > 0) {
			// 		this.thursdayOneMiles = thursdayOneMiles + 0.5;
			// 		this.overTwelveLeftoverMiles - 0.5;
			// 	}
					
			// 	if (this.overTwelveLeftoverMiles > 0) {
			// 			this.saturdayOneMiles = this.saturdayOneMiles + 0.5;
						
			// 		}
			// 	}
			// End of non-working code

			$("#tuesday1").text("Tuesday: Run " + this.tuesdayOneMiles + " miles. It should take you about " + goalTime(this.tuesdayOneMiles*this.averageMileTime) + " seconds.");
			$("#thursday1").text("Thursday: Run " + this.thursdayOneMiles + " miles. It should take you about " + goalTime(this.thursdayOneMiles*this.averageMileTime) + " seconds.");
			$("#saturday1").text("Saturday: Run " + this.saturdayOneMiles + " miles. It should take you about " + goalTime(this.saturdayOneMiles*this.averageMileTime) + " seconds.");	

		}

		else {
			switch (this.planWeekOneDistance) {
				case 3:
					this.tuesdayOneMiles = 1;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 1;
					break;
				case 3.5:
					this.tuesdayOneMiles = 1;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 1.5;
					break;
				case 4:
					this.tuesdayOneMiles = 1; 
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2;
					break;	
				case 4.5:
					this.tuesdayOneMiles = 1.5;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2;
					break;	
				case 5:
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2;
					break;
				case 5.5:
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 1;
					this.saturdayOneMiles = 2.5;
					break;		
				case 6:
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2;
					break;
				case 6.5: 
					this.tuesdayOneMiles = 2;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2.5;
					break;	
				case 7:
					this.tuesdayOneMiles = 3;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2;
					break;	
				case 7.5:
					this.tuesdayOneMiles = 3;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2.5;
					break;	
				case 8: 
					this.tuesdayOneMiles = 4;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2;
					break;	
				case 8.5:
					this.tuesdayOneMiles = 4;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 2.5;
					break;		
				case 9:
					this.tuesdayOneMiles = 4;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 3;
					break;	
				case 9.5: 
					this.tuesdayOneMiles = 4.5;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 3;
					break;	
				case 10: 
					this.tuesdayOneMiles = 5;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 3;
					break;	
				case 10.5:
					this.tuesdayOneMiles = 5;
					this.thursdayOneMiles = 2.5;
					this.saturdayOneMiles = 3;
					break;	
				case 11: 
					this.tuesdayOneMiles = 5.5;
					this.thursdayOneMiles = 2.5;
					this.saturdayOneMiles = 3;
					break;	
				case 11.5:
					this.tuesdayOneMiles = 5.5;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 4;
					break;	
				case 12:
					this.tuesdayOneMiles = 6;
					this.thursdayOneMiles = 2;
					this.saturdayOneMiles = 4;
					break;	
				}

			$("#tuesday1").text("Tuesday: Run " + this.tuesdayOneMiles + " miles. It should take you about " + goalTime(this.tuesdayOneMiles*this.averageMileTime) + " seconds.");
			$("#thursday1").text("Thursday: Run " + this.thursdayOneMiles + " miles. It should take you about " + goalTime(this.thursdayOneMiles*this.averageMileTime) + " seconds.");
			$("#saturday1").text("Saturday: Run " + this.saturdayOneMiles + " miles. It should take you about " + goalTime(this.saturdayOneMiles*this.averageMileTime) + " seconds.");
		}
		// End code for first week of plan


		// Start code for second week of plan
		if (this.planWeekTwoDistance < 3) {
			$("#tuesday2").text("Tuesday: Rest");	
			$("#thursday2").text("Thursday: Run " + (this.planWeekTwoDistance / 2) + " miles. It should take you " + goalTime((this.planWeekTwoDistance/2)*this.averageMileTime) + " seconds.");
			$("#saturday2").text("Saturday: Run " + (this.planWeekTwoDistance / 2) + " miles. It should take you " + goalTime((this.planWeekTwoDistance/2)*this.averageMileTime) + " seconds.");
			
		}	

		else if (this.planWeekTwoDistance < 6) {
			switch (this.planWeekTwoDistance) {
				case 3:
					this.tuesdayTwoMiles = 1;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 1;
					break;
				case 3.5:
					this.tuesdayTwoMiles = 1;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 1.5;
					break;
				case 4:
					this.tuesdayTwoMiles = 1; 
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2;
					break;	
				case 4.5:
					this.tuesdayTwoMiles = 1.5;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2;
					break;	
				case 5:
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2;
					break;
				case 5.5:
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2.5;
					break;					
			}

			$("#tuesday2").text("Tuesday: Run " + this.tuesdayTwoMiles + " miles. It should take you about " + goalTime(this.tuesdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#thursday2").text("Thursday: Run " + this.thursdayTwoMiles + " miles. It should take you about " + goalTime(this.thursdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#saturday2").text("Saturday: Run " + this.saturdayTwoMiles + " miles. It should take you about " + goalTime(this.saturdayTwoMiles*this.averageMileTime) + " seconds.");
		}	

		else if (this.planWeekTwoDistance < 12.5 && planAnswer === "competitive") {
			switch (this.planWeekTwoDistance) {
				case 6:
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2;
					break;
				case 6.5: 
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2.5;
					break;	
				case 7:
					this.tuesdayTwoMiles = 3;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2;
					break;	
				case 7.5:
					this.tuesdayTwoMiles = 3;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2.5;
					break;	
				case 8: 
					this.tuesdayTwoMiles = 4;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2;
					break;	
				case 8.5:
					this.tuesdayTwoMiles = 4;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2.5;
					break;		
				case 9:
					this.tuesdayTwoMiles = 4;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 3;
					break;	
				case 9.5: 
					this.tuesdayTwoMiles = 4.5;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 3;
					break;	
				case 10: 
					this.tuesdayTwoMiles = 5;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 3;
					break;	
				case 10.5:
					this.tuesdayTwoMiles = 5;
					this.thursdayTwoMiles = 2.5;
					this.saturdayTwoMiles = 3;
					break;	
				case 11: 
					this.tuesdayTwoMiles = 5.5;
					this.thursdayTwoMiles = 2.5;
					this.saturdayTwoMiles = 3;
					break;	
				case 11.5:
					this.tuesdayTwoMiles = 5.5;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 4;
					break;	
				case 12:
					this.tuesdayTwoMiles = 6;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 4;
					break;		
				}

			$("#tuesday2").text("Tuesday: Run " + this.tuesdayTwoMiles + " miles. It should take you about " + goalTime(this.tuesdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#thursday2").text("Thursday: Run " + this.thursdayTwoMiles + " miles. It should take you about " + goalTime(this.thursdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#saturday2").text("Saturday: Do " + this.saturdayTwoMiles + " mile repeats on a track or something with reliable mile markers. Your target time for each mile is " + goalTime(this.averageMileTime - 70) + " seconds.");

			}

		else if (this.planWeekTwoDistance > 12) {
			this.tuesdayTwoMiles = 6;
			this.thursdayTwoMiles = 2;
			this.saturdayTwoMiles = 4;
			this.overTwelveTotalMiles = this.planWeekTwoDistance;
			this.overTwelveLeftoverMiles = this.overTwelveTotalMiles - 12;

			for (var i=0; i < 100; i++) {
				if (this.overTwelveLeftoverMiles < 0.5) {
					break;
				}
				this.tuesdayTwoMiles = this.tuesdayTwoMiles + 0.5;
				this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;

				if (this.overTwelveLeftoverMiles < 0.5) {
					break;
				}
				this.thursdayTwoMiles = this.thursdayTwoMiles + 0.5;
				this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;

				if (this.overTwelveLeftoverMiles < 0.5) {
					break;
				}
				this.saturdayTwoMiles = this.saturdayTwoMiles + 0.5;
				this.overTwelveLeftoverMiles = this.overTwelveLeftoverMiles - 0.5;
			}

			

			$("#tuesday2").text("Tuesday: Run " + this.tuesdayTwoMiles + " miles. It should take you about " + goalTime(this.tuesdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#thursday2").text("Thursday: Run " + this.thursdayTwoMiles + " miles. It should take you about " + goalTime(this.thursdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#saturday2").text("Saturday: Run " + this.saturdayTwoMiles + " miles. It should take you about " + goalTime(this.saturdayTwoMiles*this.averageMileTime) + " seconds.");	

		}

		else {
			switch (this.planWeekTwoDistance) {
				case 3:
					this.tuesdayTwoMiles = 1;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 1;
					break;
				case 3.5:
					this.tuesdayTwoMiles = 1;
					this.thursdayTwoMiles = 1;
					this.saturdayTWoMiles = 1.5;
					break;
				case 4:
					this.tuesdayTwoMiles = 1; 
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2;
					break;	
				case 4.5:
					this.tuesdayTwoMiles = 1.5;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2;
					break;	
				case 5:
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2;
					break;
				case 5.5:
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 1;
					this.saturdayTwoMiles = 2.5;
					break;		
				case 6:
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2;
					break;
				case 6.5: 
					this.tuesdayTwoMiles = 2;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2.5;
					break;	
				case 7:
					this.tuesdayTwoMiles = 3;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2;
					break;	
				case 7.5:
					this.tuesdayTwoMiles = 3;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2.5;
					break;	
				case 8: 
					this.tuesdayTwoMiles = 4;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2;
					break;	
				case 8.5:
					this.tuesdayTwoMiles = 4;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 2.5;
					break;		
				case 9:
					this.tuesdayTwoMiles = 4;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 3;
					break;	
				case 9.5: 
					this.tuesdayTwoMiles = 4.5;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 3;
					break;	
				case 10: 
					this.tuesdayTwoMiles = 5;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 3;
					break;	
				case 10.5:
					this.tuesdayTwoMiles = 5;
					this.thursdayTwoMiles = 2.5;
					this.saturdayTwoMiles = 3;
					break;	
				case 11: 
					this.tuesdayTwoMiles = 5.5;
					this.thursdayTwoMiles = 2.5;
					this.saturdayTwoMiles = 3;
					break;	
				case 11.5:
					this.tuesdayTwoMiles = 5.5;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 4;
					break;	
				case 12:
					this.tuesdayTwoMiles = 6;
					this.thursdayTwoMiles = 2;
					this.saturdayTwoMiles = 4;
					break;	
				}

			$("#tuesday2").text("Tuesday: Run " + this.tuesdayTwoMiles + " miles. It should take you about " + goalTime(this.tuesdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#thursday2").text("Thursday: Run " + this.thursdayTwoMiles + " miles. It should take you about " + goalTime(this.thursdayTwoMiles*this.averageMileTime) + " seconds.");
			$("#saturday2").text("Saturday: Run " + this.saturdayTwoMiles + " miles. It should take you about " + goalTime(this.saturdayTwoMiles*this.averageMileTime) + " seconds.");
		}
		// End code for second week of plan

		// Old order of showing before animations were added
		// $("#planIntro").show();
		// $("#planQuestion").hide();
		// $("#planBox").hide();
		// $("#makeMyPlanButton").hide();
		// $("#planWeekOne").show();
		// $("#sunday1").show();
		// $("#monday1").show();
		// $("#tuesday1").show();
		// $("#wednesday1").show();
		// $("#thursday1").show();
		// $("#friday1").show();
		// $("#saturday1").show();
		// $("#planWeekTwo").show();
		// $("#sunday2").show();
		// $("#monday2").show();
		// $("#tuesday2").show();
		// $("#wednesday2").show();
		// $("#thursday2").show();
		// $("#friday2").show();
	    // $("#saturday2").show();
		var feelingsTotal = 0;
		for (var i = 0; i < this.feelings.length; i++) {
		    feelingsTotal += parseInt(this.feelings[i]);
		}
		var avgFeeling = (feelingsTotal / this.feelings.length);

		debugger;
		$.ajax({
		    type: 'POST',
		    url: "Default.aspx/SaveRunningData",
		    data: "{avgMile: '" + this.averageMileTime + "', plan: '" + planAnswer + "', totalDistance: '" + this.distanceSum + "', avgFeeling: '" + avgFeeling +"'}",
		    dataType: 'json',
		    contentType: "application/json; charset=utf-8",
		    success: function (data) {
		        alert(data.d);
		    },
		    error: function () {
		        alert('An error has occurred');
		    }
		});

	},

	nextClicked: function () {	


		$("#sliderTwo").hide("slide", {direction: "left"}, 600);
		$("#sliderTwo").show("slide", {direction: "right"}, 700);


		if (this.currentDayIndex + 2 === this.currentNumOfDays) {
			
			$("#nextButton").hide();
			$("#finishButton").show();
		}	

		this.times[this.currentDayIndex][0] = this.currentNumOfHours;
		this.times[this.currentDayIndex][1] = this.currentNumOfMinutes;
		this.times[this.currentDayIndex][2] = this.currentNumOfSeconds;

		var distanceAnswer = $("#distanceBox").val() === "" ? 0.0 : parseFloat($("#distanceBox").val());

		// var distanceAnswer = parseFloat($("#distanceBox").val());
		this.distances[this.currentDayIndex] = distanceAnswer;

		this.feelingsButtonsDefault ();

		var terrainAnswer = $("#terrainBox").val() === "" ? 0 : $("#terrainBox").val();
		this.terrains[this.currentDayIndex] = terrainAnswer;

		this.currentDayIndex += 1;
		
		$("#dayLabel").text("Day " + (this.currentDayIndex + 1));

		$("#previousButton").removeAttr("disabled");

		this.times[this.currentDayIndex][0] === 0 ? $("#hoursBox").val(""):$("#hoursBox").val(this.times[this.currentDayIndex][0]);
		this.times[this.currentDayIndex][1] === 0 ? $("#minutesBox").val(""):$("#minutesBox").val(this.times[this.currentDayIndex][1]);
		this.times[this.currentDayIndex][2] === 0 ? $("#secondsBox").val(""):$("#secondsBox").val(this.times[this.currentDayIndex][2]);	
		
		this.distances[this.currentDayIndex] === 0.0 ? $("#distanceBox").val(""):$("#distanceBox").val(this.distances[this.currentDayIndex]);
		
		this.terrains[this.currentDayIndex] === 0 ? $("#terrainBox").val(""):$("#terrainBox").val(this.terrains[this.currentDayIndex]);

	}

};	