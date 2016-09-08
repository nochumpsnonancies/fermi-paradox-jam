#pragma strict

public var scale : MinMax;
public var tumblespeed : float;
public var speed : MinMax;
function Start () {
	var size = scale.getRandom();
	GetComponent.<Transform>().localScale = Vector3(size, size, size);
	var rb = GetComponent.<Rigidbody>();
	rb.angularVelocity = Random.insideUnitSphere * tumblespeed;
	rb.velocity = Vector3(0, 0, speed.getRandom() * -1);
}

function Update () {
}

function OnTriggerEnter(collider : Collider) {
	if (collider.tag == 'Player') {
		GameController.GetGame().Collect(gameObject);
		Destroy(gameObject);
	}
}