#pragma strict


public var size : float;
private var t : Transform;

private var game : Game;
function Start () {
	game = GameController.GetGame();

	t = gameObject.GetComponent.<Transform>();
	if (!size) {
		size = Random.Range(3, 5);
	}
}

private var updated : boolean;
function Update () {
	if (!updated) {
		t.localScale = Vector3(size, size, size);
		updated = true;
	}
}

function OnTriggerEnter(c : Collider) {
	if (c.tag == 'Player') {
		game.Score(gameObject);
		Destroy(gameObject);
	}
}