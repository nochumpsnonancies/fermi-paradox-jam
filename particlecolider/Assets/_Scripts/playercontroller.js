#pragma strict

var rb : Rigidbody;
var t : Transform;
var speed : float;
private var fireLeft : boolean;
private var fireRight : boolean;
private var backward : boolean;
private var accelerate : boolean;
private var turnLeft : boolean;
private var turnRight : boolean;
private var duckLeft : boolean;
private var duckRight : boolean;
var maxAcceleration = 3;
public var currentAcceleration = 0;
private var currentDirection = Vector3.forward;

function Start () {
	rb = gameObject.GetComponent.<Rigidbody>();
	t = gameObject.GetComponent.<Transform>();
	speed = 0.05;
}

function Update () {
	if (Input.GetKeyUp(KeyCode.W)) {
		fireLeft = true;
	}
	if (Input.GetKeyUp(KeyCode.R)) {
		fireRight = true;
	}
	if (Input.GetKeyDown(KeyCode.D)) {
		backward = true;
	}
	if (Input.GetKeyUp(KeyCode.S)) {
		duckLeft = true;
	}
	if (Input.GetKeyUp(KeyCode.F)) {
		duckRight = true;
	}
	accelerate = Input.GetKey(KeyCode.E);
	turnRight = Input.GetKey(KeyCode.F);
	turnLeft = Input.GetKey(KeyCode.A);


	if (accelerate) {
		currentAcceleration += 1;
		if (currentAcceleration > maxAcceleration) {
		  currentAcceleration = maxAcceleration;
		}
		rb.AddRelativeForce(Vector3.forward * speed, ForceMode.VelocityChange);
	}
	if (turnRight) {
		rb.AddRelativeTorque(Vector3.up);
		t.Rotate(Vector3.up);
	}
	if (turnLeft) {
		rb.AddRelativeTorque(Vector3.down);
		t.Rotate(Vector3.down);
	}
}