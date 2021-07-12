function playAudio(vid) {
	$('audio').each(function(){
		this.pause();
	});
	x = document.getElementById("m_"+vid);
	if(x){
		x.currentTime = 0;
		x.play();
	}
}

function playAnswer1(vid) {
	$('audio').each(function(){
		this.pause();
	});
	x = document.getElementById("m_"+vid);
	if(x){
		x.currentTime = 0;
		x.play();
	}
	$('#rAnswer1').show();
}

function playAnswer2(vid) {
	$('audio').each(function(){
		this.pause();
	});
	x = document.getElementById("m_"+vid);
	if(x){
		x.currentTime = 0;
		x.play();
	}
	$('#rAnswer2').show();
	$('#rAnswer3').show();
}

function playAnswer3(vid) {
	$('audio').each(function(){
		this.pause();
	});
	x = document.getElementById("m_"+vid);
	if(x){
		x.currentTime = 0;
		x.play();
	}
	$('#rAnswer4').show();
	$('#rAnswer5').show();
}

function playAnswer4(vid) {
	$('audio').each(function(){
		this.pause();
	});
	x = document.getElementById("m_"+vid);
	if(x){
		x.currentTime = 0;
		x.play();
	}
	$('#rAnswer6').show();
}

function playAnswer5(vid) {
	$('audio').each(function(){
		this.pause();
	});
	x = document.getElementById("m_"+vid);
	if(x){
		x.currentTime = 0;
		x.play();
	}
	$('#rAnswer7').show();
}