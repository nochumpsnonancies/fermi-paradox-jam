#pragma strict

private var text : UI.Text;
function Start () {
	text = GetComponent.<UI.Text>();
}

function Update () {
	text.text = "score: " + GameController.GetGame().player.getScore();
	text.text += "          ";
	text.text += "charge: " + GameController.GetGame().player.getEnergy();
	text.text += "          ";
	text.text += "cooldown: " + GameController.GetGame().player.getCooldown();
}