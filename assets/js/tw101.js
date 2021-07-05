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
