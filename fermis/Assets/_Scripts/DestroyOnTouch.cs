using UnityEngine;
using System.Collections;

public class DestroyOnTouch : MonoBehaviour
{
  public bool destroyAll = true;

  void OnTriggerEnter(Collider trig)
  {
    if(destroyAll)
      Destroy(trig.gameObject, 0);
  }
}
