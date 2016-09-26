using UnityEngine;
using System.Collections;

public class PlatformEffects : MonoBehaviour {

  public float duration = 1.0F;
  public float SpawnRate = 3f;

  void Start()
  {
    StartCoroutine (DegradePlatform());
  }

  IEnumerator DegradePlatform()
  {
    while(true)
    {
      for (int i = 0; i < 1; i++)
      {
        Destroy(gameObject);
        yield return new WaitForSeconds (SpawnRate);
      }
    }
  }
}
