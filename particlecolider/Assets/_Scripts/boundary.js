#pragma strict

public class MinMax {
	public var min : float;
	public var max : float;
	function MinMax(amin : float, amax : float) {
		min = amin;
		max = amax;
	}
	public function getRandom() : float {
		return Random.Range(min, max);
	}
	public function Copy() : MinMax {
		return new MinMax(min, max);
	}
}

public class Boundary {
	var z : MinMax;
	var x : MinMax;
	var y : MinMax;

	public function RandomInside() {
		return Vector3(x.getRandom(), y.getRandom(), z.getRandom());
	}

	public function Clamp(v : Vector3) : Vector3 {
		return  Vector3(
			Mathf.Clamp(v.x, x.min, x.max),
			Mathf.Clamp(v.y, y.min, y.max),
			Mathf.Clamp(v.z, z.min, z.max)
		);
	}

	public function Copy() : Boundary {
		var b = new Boundary();
		b.z = z.Copy();
		b.x = x.Copy();
		b.y = y.Copy();
		return b;
	}
}

public var boundary : Boundary;;
static var _boundary : Boundary;

function Start () {
	_boundary = boundary;
}

function Update () {

}