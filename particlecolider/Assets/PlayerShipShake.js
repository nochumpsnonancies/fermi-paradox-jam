#pragma strict

public var intensity : float = 1;
private var rb : Rigidbody;

function Start () {
	rb = gameObject.GetComponent.<Rigidbody>();

}

function Update () {
	rb.position += Random.insideUnitSphere * Time.deltaTime * rb.velocity.z * intensity;
}