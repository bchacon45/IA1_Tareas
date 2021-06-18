// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";

		if(states[1] == "CLEAN" && states[2] == "CLEAN"){
			if(Math.floor(Math.random() * 2) == 1) states[1] = "DIRTY"; 
			if(Math.floor(Math.random() * 2) == 1) states[2] = "DIRTY"; 
		}
		if(states[0] == "B" && states[1] == "DIRTY" && states[2] == "DIRTY") {
			document.getElementById("log").innerHTML+="<br>TERMINO ";
			return;
		}
			
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);

