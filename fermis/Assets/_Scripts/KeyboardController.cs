using UnityEngine;
using System.Collections;

public class KeyboardController : MonoBehaviour 
{
	private GameController gameController;

	void Start () 
	{
		StartCoroutine (KeyboardListener());
		gameController = GetComponent<GameController> ();
	}

	IEnumerator KeyboardListener() 
	{
		while (true) {
			if (Input.GetKeyDown (KeyCode.Escape)) {
				gameController.PauseGame ();
			}
			yield return null;
		}
	}
}
