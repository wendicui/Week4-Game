	

	

	 // var charac = [ 'cha1', 'cha2', 'cha3', 'cha4'];

	 var number = ["0", "1", "2", "3"]
	 var row2Cliked = false;
	 var row1Cliked = false;
	 var chooseEnemey = false;
	 var defeated = 0;
 	 var i = "";
 	 var j = "";
 	//begin function
	function begin(){
		 i = "";
		 j = "";
		 defeated = 0;
		 row2Cliked = false;
		 row1Cliked = false;
		 chooseEnemey = false;
		 $(".row1").css("display", "inline-block");
		 $(".row2").hide();
		 $(".row3").hide();
		 $("#restart").css("visibility", "hidden");;
		 $(".result").html("")
		 $(".health1").html("900");
		 $(".health2").html("520");
		 $(".health3").html("500");
		 $(".health4").html("3000");
		 $(".cha1").attr("attack","80");
		 $(".cha2").attr("attack","70");
		 $(".cha3").attr("attack","20");
		 $(".cha4").attr("attack","100");


}
//1.create four images for all three lines, each have indiv class: characi



//global: write function hidden. function show
	function hide(row, i){

		$("#cha" + row + i).hide();

		
	}
	// hide("3","1")

	function show(row,i){

		$("#cha" + row + i).css("display", "inline-block");
		
	}

	 //show("3","1")

	 //restart






$(".row1").click(function(){

	 	if (row1Cliked === true){return}
	 		else{
	// firstline: on click,  generate a "j " 	
		j = this.id.replace("cha1",'');
		//console.log(j);
	//the second line turn show: 
		$(".row2").css("display", "inline-block");
		hide("2", j);
	//the rest turn hidden

		$.each(number, function(index, value){

			if (number[index] != j){

				hide("1",value);
				// console.log(value);
			}
		})
		row1Cliked = true;
//__________________________________________________________
	
	//secondline: on click, generate a ‘q',

	$(".row2").click(function(){
		if(row2Cliked === true){return}
			else{

		i = this.id.replace("cha2",'');
		
		show("3",i);
		hide("2",i);
		row2Cliked = true;
		chooseEnemey = true;
		}
	})
		//--------------------------------------------------
//attack, array: counting times. 
			$("#attack").click(function(){
				
				if(chooseEnemey ===false){return}
					else{

				var currentHealth = $(".health3" + i).text();
				//console.log(currentHealth);
				var attack = $("#cha1" + j).attr("attack");
				//console.log(attack);
				var healthAfter = currentHealth - attack;
				//console.log(i);
				//console.log(healthAfter);
				$(".health3" + i).html(healthAfter);

				$("#cha1" + j).attr("attack", attack *2) ;
				//console.log($("#cha1" + j).attr("attack"))
				if(healthAfter < 0){ hide("3", i)
				defeated += 1;
				row2Cliked = false;
				chooseEnemey = false;
				console.log(defeated);
				if (defeated ===3){
					begin();
					setTimeout(function() {
					alert("YOU WIN");
								}, 0);
						} }else{

	//counter attack

				var currentHealthPlayer = $(".health1" + j).text();
				var counterAttack = $("#cha3" + i).attr("counterAttack");
				var healthAfterPlayer = currentHealthPlayer - counterAttack;
				if(healthAfterPlayer < 0){ 
					healthAfterPlayer = 0;
					$(".result").html("You are Defeated")
					chooseEnemey = false;
					$("#restart").css("visibility", "visible");
					$("#restart").click(function(){
						console.log("restart");
						begin()
						console.log(row1Cliked)
					});


				}
				$(".health1" + j).html(healthAfterPlayer);

			}
			}
			})




		






    }
	})

















