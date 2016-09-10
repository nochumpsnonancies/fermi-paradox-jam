using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

	void FixedUpdate ()
  {
    if(Input.GetKey("escape"))
    {
      GameController.control.PauseGame();
    }
	}

  void OnCollisionEnter2D(Collision2D coll)
  {
    if (coll.gameObject.tag == "LifeElement")
    {
      GameController.control.Score += 1f;
      Destroy(coll.gameObject, 0);
    }

    if (coll.gameObject.tag == "Enemy")
    {
      Destroy(coll.gameObject, 0);
      GameController.control.Health -= 1f;
    }

    if (coll.gameObject.tag == "HealthKit")
    {
      Destroy(coll.gameObject, 0);
      GameController.control.Health += 1f;
    }

  }
}
