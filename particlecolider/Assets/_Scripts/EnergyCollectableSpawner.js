#pragma strict

function Start () {
	cooldown = Cooldown.max;
}
public var models : GameObject[];
public var giveAwayRate : MinMax;
public var Cooldown : MinMax;
public var ObjectCooldown : MinMax;
public var zSize : MinMax;
public var spawnStepSize : MinMax;
public var spawnStepZ : MinMax;
private var cooldown : float;
function Spawn() {
	yield;
	var size = getEnergyDiff() * giveAwayRate.getRandom();
	var i = 0;
	var position : Vector3;
	while (i < size) {
		var model = models[Random.Range(0, models.length)];
		position = getRandomPosition(position) + GetComponent.<Transform>().position;
		Instantiate(model, position, Quaternion.identity);
		i += 1;
		yield WaitForSeconds(ObjectCooldown.getRandom());
	}
}
function getRandomPosition(basePosition : Vector3) : Vector3 {
	var b = GameController.GetBoundary().Copy();
	b.z = zSize;
	return b.Clamp(basePosition + (Random.insideUnitSphere * spawnStepSize.getRandom()) + Vector3(0, 0, spawnStepZ.getRandom()));
}
function Update () {
	if (cooldown <= 0 && getEnergyDiff() > 0) {
		StartCoroutine(Spawn());
		cooldown = Cooldown.getRandom();
	} else {
		cooldown -= Time.deltaTime;
	}
}
private function getEnergyDiff() : float {
	return GameController.GetGame().player.getEnergyDiff();
}

public class Cooldown {
	public var size : MinMax;
	private var cooldown : float;
	public var rate : float;

	public function Add(v : float) {
		cooldown += v;
	}

	public function Reset() {
		cooldown = size.getRandom();
	}

	public function Ready() : boolean {
		return cooldown == 0;
	}

	public function Update() {
		cooldown -= Mathf.Clamp(Time.deltaTime * rate, 0.0, Time.deltaTime * rate);
	}
}