using UnityEngine;
using System.Collections;

public class PauseMenu : MonoBehaviour {

  public void Quit ()
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
