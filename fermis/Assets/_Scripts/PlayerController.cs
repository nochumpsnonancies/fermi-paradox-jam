using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

  private Animator Anim;

  void Awake ()
  {
    Anim = GetComponent<Animator>();
  }

	void FixedUpdate ()
  {
    if(Input.GetKey("escape"))
    {
      GameController.control.PauseGame();
    }
	}

  void OnTriggerEnter2D(Collider2D trig)
  {
    if (trig.gameObject.tag == "LifeElement")
    {
      trig.transform.parent = transform;
    }

  }

  void OnCollisionEnter2D(Collision2D coll)
  {
    if (coll.gameObject.tag == "Enemy")
    {
      Anim.Play("Hurt");
      GameController.control.Health -= 1f;
    }

    if (coll.gameObject.tag == "HealthKit")
    {
      Destroy(coll.gameObject, 0);
      GameController.control.Health += 1f;
    }

  }
}
