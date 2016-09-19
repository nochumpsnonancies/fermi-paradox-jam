using UnityEngine;
using System.Collections;

public class PlatformEffects : MonoBehaviour {

  public float duration = 1.0F;

  void Start()
  {
    Invoke("DestroyPlatform", duration);
  }

  void DestroyPlatform()
  {
    Destroy(gameObject);
  }

}
