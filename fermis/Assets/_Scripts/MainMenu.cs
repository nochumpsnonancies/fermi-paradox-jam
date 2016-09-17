using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;

public class MainMenu : MonoBehaviour
{
  public GameObject loadingScreenPrefab;

  public void ExitGame()
  {
    Application.Quit();
  }

  public void StartGame()
  {
    loadingScreenPrefab.SetActive(true);
    SceneManager.LoadScene("Level01");
  }
}
