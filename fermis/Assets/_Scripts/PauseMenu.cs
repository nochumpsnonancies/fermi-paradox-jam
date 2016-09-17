using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;

public class PauseMenu : MonoBehaviour {

  public void ExitGame ()
  {
    Application.Quit();
  }

  public void Retry ()
  {
    GameController.control.ResetGame();
  }

  public void PauseGame ()
  {
    GameController.control.PauseGame();
  }

}
