using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour {

	public static GameController control;
  public GameObject GamePauseCanvas;
  public GameObject GameOverCanvas;
  public GameObject GameWinCanvas;
  public float Score;
  public float Health;
  public Text ScoreHUD;
  public Text HealthHUD;
  public bool Paused = false;

  void Awake () {
    control = this;
	}

	void Update () {
    ScoreHUD.text = ("Score " + Score.ToString ("n0"));
    HealthHUD.text = ("Health " + Health.ToString ("n0"));
	}

  public void PauseGame ()
  {
    if(!Paused)
    {
      Paused = true;
      GamePauseCanvas.SetActive(true);
      Time.timeScale = 0;
    } else {
      Paused = false;
      GamePauseCanvas.SetActive(false);
      Time.timeScale = 1;
    }
  }

  public void GameOver ()
  {
    GameOverCanvas.SetActive(true);
    Time.timeScale = 0;
  }

  public void GameWin ()
  {
    GameWinCanvas.SetActive(true);
    Time.timeScale = 0;
  }

  public void ResetGame ()
  {
    Time.timeScale = 1;
    SceneManager.LoadScene("Level01");
  }
}
