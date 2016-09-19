using UnityEngine;
using System.Collections;

public class DestroyOnTouch : MonoBehaviour
{
  public bool destroyAll = true;

  void OnTriggerEnter2D(Collider2D trig)
  {
    if(destroyAll)
      Destroy(trig.gameObject);
  }
}
