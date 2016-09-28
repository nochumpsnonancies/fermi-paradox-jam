using UnityEngine;
using System.Collections;

public class PlatformEffects : MonoBehaviour {

  public Color32 color1 = new Color32(64, 128, 192, 255);
  public Color32 color2 = new Color32(64, 128, 192, 255);
  private Renderer rendRef;

  void Start()
  {
    rendRef = GetComponent<Renderer>();
    StartCoroutine (DegradePlatform());
  }

  IEnumerator DegradePlatform()
  {
    while(true)
    {
      for (int i = 0; i < 1; i++)
      {
        yield return new WaitForSeconds (Random.Range(3,9));
        rendRef.material.color = color1;
        yield return new WaitForSeconds (0.3f);
        rendRef.material.color = color2;
        yield return new WaitForSeconds (0.3f);
        rendRef.material.color = color1;
        yield return new WaitForSeconds (0.3f);
        rendRef.material.color = color2;
        yield return new WaitForSeconds (0.3f);
        rendRef.material.color = color1;
        yield return new WaitForSeconds (0.3f);
        rendRef.material.color = color2;
        yield return new WaitForSeconds (1f);
        Destroy(gameObject, 0);
      }
    }
  }
}
