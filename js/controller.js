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


		function nameTyped() {
			self.startingName = !self.startingName;
		}


	function whosTurn(i) {
		if (self.playercount %2 !== 0) {
			self.playercount++;
			self.p1Turn(i);
		} else if (self.playercount %2 == 0) {
			self.playercount++;
			self.p2Turn(i);
		}
	}

	function p1Turn(i) {
		if (self.boxes[i] != "x" && self.boxes[i] != "o") {
			self.boxes[i]="x";
		} else {
			alert("Please choose another box :)");
			self.playercount--;
		}
	}
	function p2Turn(i) {
		if (self.boxes[i] != "x" && self.boxes[i] != "o") {
			self.boxes[i]="o";
		} else {
			alert("Please choose another box :)");
			self.playercount--;
		}

	}


}