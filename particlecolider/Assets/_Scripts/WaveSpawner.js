#pragma strict

class SpawnWave {
	public var size : MinMax;
	public var models : GameObject[];
	public var wait : MinMax;

	public var zBoundary : MinMax;
	private var boundary : Boundary;
	private function getRandomPosition() : Vector3 {
		var boundary = GameController.GetBoundary().Copy();
		boundary.z = zBoundary;
		return boundary.RandomInside();
	}

	public function Spawn(parent : GameObject) {
		Debug.Log('wave of ' + size);
		var i = 0;
		var size = size.getRandom();
		var position : Vector3;
		while (i < size) {
			var model = models[Random.Range(0, models.length)];
			position = parent.GetComponent.<Transform>().position + 
				getRandomPosition();
			Debug.Log("instantiating model " + i);
			parent.Instantiate(model, position, Quaternion.identity);
			yield WaitForSeconds(wait.getRandom());
			i += 1;
		}
	}
}

class Spawner {
	public var initialWait : float;
	public var wait : MinMax;
	public var waves : SpawnWave[];

	private var gameObject : GameObject;
	function SetGameObject(go : GameObject) {
		gameObject = go;
	}

	function Start() {
		Debug.Log('starting in' + initialWait);
		yield WaitForSeconds(initialWait);
		while (true) {
			var wave = waves[Random.Range(0, waves.length)];
			yield wave.Spawn(gameObject);
			yield WaitForSeconds(wait.getRandom());
		}
	}
}

public var spawner : Spawner;

function Start () {
	spawner.SetGameObject(gameObject);
	StartCoroutine(spawner.Start());
}

function Update () {

}