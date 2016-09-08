#pragma strict

public var max : int;
public var spawnrate : float;
public var spawnZ : MinMax;
public var models : GameObject[];

private var objects : GameObject[];
function Start () {
	objects = new GameObject[max];
}

private function SpawnObject(position : Vector3) {
	var model = models[Random.Range(0, models.length)];
	var obj = gameObject.Instantiate(
		model,
		position,
		Quaternion.identity);
	return obj;
}

function Update () {
	var all = new GameObject[max];
	var z = GetComponent.<Transform>().position.z;
	var i = 0;
	var boundary = GameController.GetBoundary();
	while (i < max) {
		var obj : GameObject;
		obj = objects[i];
		if (obj && obj.GetComponent.<Transform>().position.z < z + boundary.z.min) {
			Destroy(obj);
		}
		if (!obj) {
			obj = SpawnObject(Vector3(boundary.x.getRandom(), boundary.y.getRandom(), z + spawnZ.getRandom()));
		}
		all[i] = obj;
		i += 1;
	}
	objects = all;
}