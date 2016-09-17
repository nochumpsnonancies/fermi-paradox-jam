using UnityEngine;
using System.Collections;

public class PlatformSpawner : MonoBehaviour {

	public GameObject[] Platforms;
	public float MaxPlatforms;
	public float horizontalMin = 7.5f;
	public float horizontalMax = 14f;
	public float verticalMin = -6f;
	public float verticalMax = 6;
	private Vector2 originPosition;

	void Start ()
	{
		originPosition = transform.position;
		Spawn();
	}

	void Spawn()
	{
		for (int i = 0; i < MaxPlatforms; i++)
		{
			Vector2 randomPosition = originPosition + new Vector2 (Random.Range(horizontalMin, horizontalMax), Random.Range (verticalMin, verticalMax));
      Instantiate(Platforms[Random.Range(0, Platforms.Length)], randomPosition, Quaternion.identity);
			originPosition = randomPosition;
		}
	}

}
