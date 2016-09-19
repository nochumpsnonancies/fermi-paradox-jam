using UnityEngine;
using System.Collections;

public class PlatformSpawner : MonoBehaviour {

	public GameObject[] Platforms;
	public float horizontalMin = 7.5f;
	public float horizontalMax = 14f;
	public float verticalMin = -6f;
	public float verticalMax = 6f;
	public float SpawnRate = 3f;
	private Vector2 originPosition;

	void Start ()
	{
		originPosition = transform.position;
		StartCoroutine (Spawn());
	}

	IEnumerator Spawn()
	{
		while(true)
		{
			for (int i = 0; i < 1; i++)
			{
				Vector2 randomPosition = originPosition + new Vector2 (Random.Range(horizontalMin, horizontalMax), Random.Range (verticalMin, verticalMax));
	      Instantiate(Platforms[Random.Range(0, Platforms.Length)], randomPosition, Quaternion.identity);
				yield return new WaitForSeconds (SpawnRate);
			}
		}
	}

}
