#pragma strict

private var t : Transform;
private var pt : Transform;
private var timer : float;
public var speedz : float;

private var initialz : float;
private var initialpz : float;

function Start () {
	t = gameObject.GetComponent.<Transform>();
	initialz = t.position.z;
	pt = gameObject.GetComponentInParent.<Transform>();
	initialpz = pt.position.z;
}

function Update () {
	timer = timer + Time.deltaTime;
	t.position += Vector3(0, 0, (pt.position.z - initialpz) * -speedz);
	initialpz = pt.position.z;
}