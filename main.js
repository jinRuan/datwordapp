var bgcolor = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#95a5a6','#f39c12'];

var words = ["hello", "world", "bye"];

function randBG(){
	var i = Math.floor( Math.random() * 8);

	return bgcolor[i];
<<<<<<< HEAD
}

function changeBG(e){
	$(e).css('background', randBG());

}

function randWord(){
	1
=======
}

function changeBG(e){
	$(e).css('background', randBG());

>>>>>>> 156025da2f42af35ef81ac3f78bef6263420b995
}