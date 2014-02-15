var bgcolor = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#95a5a6','#f39c12'];

function randBG(){
	var i = Math.floor( Math.random() * 8);

	//document.body.style.background = bgcolor[i];
}

$( ".hidden" ).on( "taphold", function() {
	$('.card').show();
	$(".hidden").hide();
	randBG();
});

$('.hidden').mousedown(function() {
	$('.card').show();
	$(".hidden").hide();
	randBG();
	});