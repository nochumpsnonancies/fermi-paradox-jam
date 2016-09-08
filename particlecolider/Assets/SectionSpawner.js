#pragma strict

public var automatic : boolean;
public var waveSpawnRate : float;
public var objSpawnRate : float;
public var minWaveSize : float;
public var maxWaveSize : float;
public var spawnOrigin : Vector3;
public var spawnBoundary : Boundary;

function Start () {

}

public var models : GameObject[];
public function SpawnObject(position : Vector3) : GameObject {
	var model = models[Random.Range(0, models.length)];
	var obj = gameObject.Instantiate(
		model,
		position,
		Quaternion.identity);
	return obj;
}

public function GetRandomSpawnPosition() : Vector3 {
	return spawnBoundary.RandomInside() + 
		spawnOrigin + 
		GetComponent.<Transform>().position;
}

public function SpawnWave(size: float) : IEnumerator {
	var i = 0;
	while (i < size) {
		i += 1;
		SpawnObject(GetRandomSpawnPosition());
		yield WaitForSeconds(objSpawnRate);
	}
}
public function SpawnSym() : IEnumerator {
	var z = spawnBoundary.z.getRandom() + GetComponent.<Transform>().position.z;
	var x : float = spawnBoundary.x.min;
	var y : float;
	while (x <= spawnBoundary.x.max) {
		y = spawnBoundary.y.min;
		while (y <= spawnBoundary.y.max) {
			SpawnObject(Vector3(x, y, z));
			y += 1;
		}
		x += 1;
	}
}
public var waveCooldown : Cooldown;
private var waveSpawnCooldown : float;
function Update () {
	
	if (waveCooldown.Ready()) {
		waveCooldown.Reset();
	}
	waveCooldown.Update();

	var canSpawn = waveSpawnCooldown == 0;
	if (automatic && canSpawn) {
		waveSpawnCooldown = waveSpawnRate;
		StartCoroutine(SpawnSym());
		//StartCoroutine(SpawnWave(Random.Range(minWaveSize, maxWaveSize)));
	} else {
		waveSpawnCooldown = Mathf.Clamp(waveSpawnCooldown - Time.deltaTime, 0.0, Mathf.Infinity);
	}
}