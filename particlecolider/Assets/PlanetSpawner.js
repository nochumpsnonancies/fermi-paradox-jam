#pragma strict

public var max : int;
public var boundary : Boundary;

function Start () {

}

public var model : GameObject;
private function CreatePlanet(position : Vector3) {
	Instantiate(model, position, Quaternion.identity);
}

private var count : int;
function Update () {
	while (count < max) {
		CreatePlanet(GameController.GetBoundary().RandomInside());
		count += 1;
	}
}