using UnityEngine;
using System.Collections;

public class Planet : MonoBehaviour {

  public float VerticalSpeedMin;
  public float VerticalSpeedMax;
  public float HorizontalSpeedMin;
  public float HorizontalSpeedMax;

  private Rigidbody rb;

  void Start () {
    rb = gameObject.GetComponent<Rigidbody>();
    Launch();
  }

  void Launch ()
  {
    rb.AddForce(Vector3.up * Random.Range(VerticalSpeedMin, VerticalSpeedMax));
    rb.AddForce(Vector3.right * Random.Range(HorizontalSpeedMin, HorizontalSpeedMax));
  }
}
