var mySound = new Audio("ButtonSound.wav");
var Music = new Audio("Game Music.mp3");

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	if (roomIndex != 0){
		mySound.play();
	}
	document.getElementById("roomChoices").innerHTML = "";
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
		var roomChoices = "<button type='button' onclick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button>";
		document.getElementById("roomChoices").innerHTML += roomChoices;
	}
	switch(roomIndex)
	 {
			 case 0:
					Music.play();
			 break;
			 default:
			 break;
	 }
}
