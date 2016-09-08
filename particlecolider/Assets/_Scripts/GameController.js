#pragma strict

public class Player {
	private var score : float;

	public var baseSpeed : float;
	public var maxCooldown : float;
	public var cooldownRate : float;
	public var energySpendWarmUp : float;
	public var rechargeRate : float;
	public var charge : float;
	private var energy : float;
	private var cooldown : float;
	public function Reset() {
		energy = charge;
		score = 0;
	}
	public function SpendEnergy(qty : float) : float {
		if (cooldown >= maxCooldown) {
			return 0;
		}
		if (qty < 0 || energy < qty) {
			return 0;
		}
		energy -= qty;
		cooldown += energySpendWarmUp * qty;
		return qty;
	}
	public function SpendEnergy(qty : float, partialSpend : boolean) : float {
		if (partialSpend && energy < qty) {
			qty = energy;
		}
		return SpendEnergy(qty);
	}
	public function RechargeEnergy(qty : float) : float {
		if (qty < 0) {
			return 0;
		}
		if (energy + qty > charge) {
			qty = charge - energy;
		}
		energy += qty;
		return qty;
	}
	public function getEnergyDiff() {
		return charge - energy;
	}
	public function Update() {
		if (cooldown == 0) {
			RechargeEnergy(Time.deltaTime * rechargeRate);
		}

		cooldown -= cooldownRate * Time.deltaTime;
		cooldown = Mathf.Clamp(cooldown, 0, maxCooldown);
	}
	public function getEnergy() : float {
		return energy;
	}
	public function addScore(val : float) {
		score += val;
	}
	public function getScore() : float {
		return score;
	}
	public function getCooldown() : float {
		return cooldown;
	}
}

class Game {
	public var player : Player;
	public var score : float;
	function Game(p1 : Player) {
		player = p1;
		player.Reset();
	}
	public function Score(obj : GameObject) {
		var score = 1;
		player.addScore(score);
	}
	public function Collect(obj : GameObject) {
		var energy = 1;
		player.RechargeEnergy(energy);
	}
	public function Update() {
		player.Update();
	}
}
public var player : Player;
public var DisplayBoundary : Boundary;

static var displayBoundary : Boundary;
static var game : Game;
public static function GetGame() : Game {
	return game;
}
public static function GetBoundary() : Boundary {
	return displayBoundary;
}

function Start () {
	game = new Game(player);
	displayBoundary = DisplayBoundary;
}

function Update () {
	game.Update();
}