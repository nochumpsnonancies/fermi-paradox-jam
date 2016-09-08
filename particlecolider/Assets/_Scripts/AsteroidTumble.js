#pragma strict

public var mintumblespeed : float = 0.3;
public var maxtumblespeed : float = 1.5;
public var minspeed : float = 0.2;
public var maxspeed : float = 1;

function Start () {
	var rb = gameObject.GetComponent.<Rigidbody>();
	rb.angularVelocity = Random.insideUnitSphere * Random.Range(mintumblespeed, maxtumblespeed);
	rb.velocity = Vector3.back * Random.Range(minspeed, maxspeed);
}

function Update () {

}