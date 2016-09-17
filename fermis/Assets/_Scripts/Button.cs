using UnityEngine;
using System.Collections;

public class Button : MonoBehaviour {

  private Animator anim;
  public GameObject target;

  void Start ()
  {
    anim = GetComponent<Animator>();
  }

  void OnCollisionEnter2D(Collision2D coll)
  {
    anim.enabled = true;
    target.SetActive(true);
  }
}
