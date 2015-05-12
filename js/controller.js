angular
		.module("ttt")
		.controller("MainController", mainController)


	function mainController() {
		var self = this;
		self.p1name="Player 1";
		self.p2name="Player 2";
		self.p1score=0;
		self.p2score=0;
		self.startingName= true;
		self.nameTyped = nameTyped;
		self.p1Turn=p1Turn;
		self.p2Turn=p2Turn;
		self.whosTurn=whosTurn;
		self.playercount=1;
		self.boxes=[];
		self.counter=0;
		self.winningMethod=winningMethod;
		self.resultShows= false;
		self.result = result;
		self.winner="winner";
		self.refreshBoard=refreshBoard;

/* ask for name*/
	function nameTyped() {
			self.startingName = !self.startingName;
		}

/*determine who's turn, and pass in an argument*/
	function whosTurn(i) {
		if (self.playercount %2 !== 0) {
			self.playercount++;
			self.counter++;
			self.p1Turn(i);
		} else if (self.playercount %2 == 0) {
			self.playercount++;
			self.p2Turn(i);
			self.counter++;
		}
	}
/*determine who's turn*/
	function p1Turn(i) {
		if (self.boxes[i] != "x" && self.boxes[i] != "o") {
			self.boxes[i]="x";
			self.winningMethod();
		} else {
			alert("Please choose another box :)");
			self.playercount--;
			self.counter--;
		}
	}
	function p2Turn(i) {
		if (self.boxes[i] != "x" && self.boxes[i] != "o") {
			self.boxes[i]="o";
			self.winningMethod();
		} else {
			alert("Please choose another box :)");
			self.playercount--;
			self.counter--;
		}

	}

	function winningMethod() {
		if (((self.boxes[0] === "x") && (self.boxes[1] === "x") && (self.boxes[2] === "x")) || 
		   ((self.boxes[3] === "x") && (self.boxes[4] === "x") && (self.boxes[5] === "x")) ||
	       ((self.boxes[6] === "x") && (self.boxes[7] === "x") && (self.boxes[8] === "x")) ||
 		   ((self.boxes[0] === "x") && (self.boxes[3] === "x") && (self.boxes[6] === "x")) ||
 	  	   ((self.boxes[1] === "x") && (self.boxes[4] === "x") && (self.boxes[7] === "x")) ||
		   ((self.boxes[2] === "x") && (self.boxes[5] === "x") && (self.boxes[8] === "x")) ||
		   ((self.boxes[0] === "x") && (self.boxes[4] === "x") && (self.boxes[8] === "x")) ||
		   ((self.boxes[2] === "x") && (self.boxes[4] === "x") && (self.boxes[6] === "x"))) 
			{ 	
			self.p1score++;
			self.winner="Player 1 wins";
			self.result();
			} 

	else if (((self.boxes[0] === "o") && (self.boxes[1] === "o") && (self.boxes[2] === "o"))||
		    ((self.boxes[3] === "o") && (self.boxes[4] === "o") && (self.boxes[5] === "o"))||
 	 	 	((self.boxes[6] === "o") && (self.boxes[7] === "o") && (self.boxes[8] === "o"))||
			((self.boxes[0] === "o") && (self.boxes[3] === "o") && (self.boxes[6] === "o"))||
			((self.boxes[1] === "o") && (self.boxes[4] === "o") && (self.boxes[7] === "o"))||
			((self.boxes[2] === "o") && (self.boxes[5] === "o") && (self.boxes[8] === "o"))||
			((self.boxes[0] === "o") && (self.boxes[4] === "o") && (self.boxes[8]=== "o")) ||
			((self.boxes[2] === "o") && (self.boxes[4] === "o") && (self.boxes[6] === "o")))
			{
			self.p2score++;
			self.winner="Player 2 wins";
			self.result();
			} 
	else if (self.counter === 9) {
			alert("Its a tie!");
			}
	}

/*toogle result to appera when winner is determined*/
	function result() {
		self.resultShows = !self.resultShows;
	}

	function refreshBoard() {
		self.playercount=1;
		self.boxes=[];
		self.counter=0;
		self.resultShows= false;

	}



}