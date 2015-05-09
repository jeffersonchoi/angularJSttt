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


		function nameTyped() {
			self.startingName = !self.startingName;
		}


		





}