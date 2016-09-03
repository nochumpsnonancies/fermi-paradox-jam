using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

  public float Speed;
  public float JumpPower;
	public bool Grounded;
  public GameObject GroundCheck;

  private Rigidbody rb;

	void Start () {
    rb = gameObject.GetComponent<Rigidbody>();
	}

	void FixedUpdate ()
  {
    if(Input.GetKeyDown("space"))
    {
      rb.AddForce(Vector3.up * JumpPower);
    }
    if(Input.GetKey("escape"))
    {
      GameController.control.PauseGame();
    }
	}

  void OnCollisionEnter(Collision coll)
  {
    if (coll.gameObject.tag == "PlanetBlue")
    {
      Destroy(coll.gameObject, 0);
    }

    if (coll.gameObject.tag == "PlanetRed")
    {
      Destroy(coll.gameObject, 0);
      GameController.control.Health -= 1f;
    }

    if (coll.gameObject.tag == "PlanetGreen")
    {
      Destroy(coll.gameObject, 0);
      GameController.control.Health += 1f;
    }

  }
}
