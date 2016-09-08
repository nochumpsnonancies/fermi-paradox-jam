#pragma strict

public var tumblespeed : float = 10;
public var models : GameObject[];
private var rb : Rigidbody;

function Start () {
	rb = gameObject.GetComponent.<Rigidbody>();
	rb.angularVelocity = Random.insideUnitSphere * tumblespeed;
	var t = gameObject.GetComponent.<Transform>();
//	Instantiate(models[Random.Range(0, models.length)], t);
}

private var positioned = false;
function Update () {
	if (!positioned) {
		rb.position = boundary._boundary.RandomInside();;
		positioned = true;
	}
}