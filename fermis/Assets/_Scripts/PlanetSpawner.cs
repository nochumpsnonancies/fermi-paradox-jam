﻿using UnityEngine;
using System.Collections;

public class PlanetSpawner : MonoBehaviour {

  public GameObject[] planets;
  public float spawnRateA = 9f;
  public float spawnRateB = 15f;
  public float startDelay = 1f;
  public float minX = 0f;
  public float maxX = 0f;
  public float minY = 0f;
  public float maxY = 0f;
  public float minZ = 0f;
  public float maxZ = 0f;
  private Vector3 originPosition;

  void Start ()
  {
    originPosition = new Vector3((Random.Range(minX, maxX)), (Random.Range(minY, maxY)), (Random.Range(minZ, maxZ)));
    StartCoroutine (Spawn());
  }

  IEnumerator Spawn()
  {
    yield return new WaitForSeconds (startDelay);
    while(true)
    {
      for (int i = 0; i < 1; i++)
      {
        originPosition = new Vector3((Random.Range(minX, maxX)), (Random.Range(minY, maxY)), (Random.Range(minZ, maxZ)));
        Instantiate(planets[Random.Range(0, planets.Length)], originPosition, Quaternion.identity);
        yield return new WaitForSeconds (Random.Range(spawnRateA, spawnRateB));
      }
    }
  }

}
