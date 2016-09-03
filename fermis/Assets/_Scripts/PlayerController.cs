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
}
