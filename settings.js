let settingsOpen = false;

document.addEventListener("DOMContentLoaded", async function() {
  const host = await browser.tabs.query({active: true, currentWindow: true})
  const siteTitle = document.getElementById("site-title")
  const url = new URL(host[0].url)
  siteTitle.innerText = url.host

  document.getElementById("settings-button").addEventListener('click', toggleSettings)
})

function toggleSettings() {
  const settings = document.getElementById("settings")
  const settingsButton = document.getElementById("settings-button")
  if (settingsOpen) {
    settings.style.display = "none"
    settingsButton.classList.replace("button-up", "button-down")
    settingsOpen = false
  } else {
    settings.style.display = "block"
    settingsButton.classList.replace("button-down", "button-up")
    settingsOpen = true
  }
}
