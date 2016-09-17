using UnityEngine;
using System.Collections;

public class Portal : MonoBehaviour {

  private float range;
  private Light lt;

  void Start ()
  {
    lt = GetComponent<Light>();
  }

  void Update ()
  {
    lt.range = GameController.control.Score;
  }

  void OnTriggerEnter2D(Collider2D trig)
  {
    if (trig.gameObject.tag == "LifeElement")
    {
      Debug.Log("object at portal");
      trig.transform.parent = null;
      GameController.control.Score += 1;
      Destroy(trig.gameObject, 0);
    }
  }
}
