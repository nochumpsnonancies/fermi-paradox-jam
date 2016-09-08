#pragma strict

public var obj : GameObject;
private var t : Transform;
private var ot : Transform;
private var originp : Vector3;
function Start () {
	t = gameObject.GetComponent.<Transform>();
	ot = obj.GetComponent.<Transform>();
	originp = ot.position - t.position + Vector3(0, 0, 0);
}

public var tagz : boolean;
public var tagx : boolean;
public var tagy : boolean;

function FixedUpdate () {
	if (tagz) {
		t.position.z = ot.position.z - originp.z;
	}
	if (tagx) {
		t.position.x = ot.position.x - originp.x;
	}
	if (tagy) {
		t.position.y = ot.position.y - originp.y;
	}
}