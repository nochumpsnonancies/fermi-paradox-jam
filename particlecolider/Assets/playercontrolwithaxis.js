#pragma strict

public var baseSpeed : float;
public var tilt : float;
public var basemovement : float;
public var ascdesctilt : float;

private var rb : Rigidbody;
private var t : Transform;

function Start () {
	rb = gameObject.GetComponent.<Rigidbody>();
	t = gameObject.GetComponent.<Transform>();
}

public var turbomax : float;
public var turboacceleration : float;
public var turboenergycost : float;
private var turbo : float = 0;
public function GetTurboVelocity(mod : float) {
	if (mod > 0) {
		var energyRequired = turboenergycost * Time.deltaTime;
		if (!(GameController.GetGame().player.SpendEnergy(energyRequired) > 0)) {
			mod = -1;
		}
	}
	var delta = turboacceleration * Time.deltaTime * mod;
	var t = turbo + delta;
	if (turbomax < t) {
		return turbomax;
	}
	if (0 > t) {
		return 0;
	}
	return t;
}
function FixedUpdate () {
	var speed = baseSpeed * Time.deltaTime;
	var movehorizontal = Input.GetAxis('Horizontal');
	var movevertical = -Input.GetAxis('Vertical');
	t.rotation = Quaternion.Euler((movevertical * -ascdesctilt), 0, rb.velocity.x * - tilt);


	turbo = GetTurboVelocity(Input.GetKey(KeyCode.RightAlt) ? 1 : -1);
	rb.velocity = Vector3(movehorizontal, (movevertical * basemovement), basemovement + turbo) * speed;
	rb.position = GameController.GetBoundary().Clamp(rb.position);
}