const modal1HTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content">
    <div class="ssm-modal-header">
      <h1 class="ssm-modal-title" >SurfSafe</h1>
    </div>
    <div class="ssm-modal-body">
      <h2 class="ssm-site-title" id="ssm-site-title"></h2>
      <div class="ssm-stars">
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#4A4A4A" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#4A4A4A" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#4A4A4A" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
      </div>
      <p class="ssm-site-status">This site does not seem safe enough for you. It is advised not to enter</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
      <button type="button" id="ssm-checker-button" class="ssm-btn ssm-btn-secondary">Enter with live check</button>
      <button type="button" id="ssm-details-button" class="ssm-btn ssm-btn-secondary">Details</button>
    </div>
  </div>
</div>
</div>
`;

const modal2HTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content">
    <div class="ssm-modal-header">
      <h1 class="ssm-modal-title" >SurfSafe</h1>
    </div>
    <div class="ssm-modal-body">
      <h2 class="ssm-site-title" id="ssm-site-title"></h2>
      <p class="ssm-site-status">This site is not in our database.</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
      <button type="button" id="ssm-checker-button" class="ssm-btn ssm-btn-primary">Enter with live check</button>
    </div>
  </div>
</div>
</div>
`;

const modalCheckerHTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content">
    <div class="ssm-modal-header">
      <h1 class="ssm-modal-title" >SurfSafe</h1>
    </div>
    <div class="ssm-modal-body">
      <h2 class="ssm-site-title" id="ssm-site-title"></h2>
      <p class="ssm-site-status">Checker has concluded that this site is not safe</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
    </div>
  </div>
</div>
</div>
`;

const detailsHTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content-detail">
    <div class="ssm-modal-header">
      <h1 class="ssm-modal-title" >SurfSafe</h1>
    </div>
    <div class="ssm-modal-body">
      <p class="ssm-detail-title">Details</p>
      <div class="ssm-modal-detail-block">
        <div class="ssm-detail-graph-parent">
          <p class="ssm-detail-cat">Flashes</p>
          <div class="ssm-detail-graph"></div>
        </div>
        <div class="ssm-detail-graph-parent">
          <p class="ssm-detail-cat">High-frequency patterns</p>
          <div class="ssm-detail-graph"></div>
        </div>
        <div class="ssm-detail-graph-parent">
          <p class="ssm-detail-cat">Intense visual stimulation</p>
          <div class="ssm-detail-graph"></div>
        </div>
        <div class="ssm-detail-graph-parent">
          <p class="ssm-detail-cat">High luminance</p>
          <div class="ssm-detail-graph"></div>
        </div>
      </div>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
      <button type="button" id="ssm-checker-button" class="ssm-btn ssm-btn-secondary">Enter with live check</button>
    </div>
  </div>
</div>
</div>
`;

const detectedHTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content">
    <div class="ssm-modal-header">
      <h1 class="ssm-modal-title" >SurfSafe</h1>
    </div>
    <div class="ssm-modal-body">
      <h2 class="ssm-site-title" id="ssm-site-title"></h2>
      <p class="ssm-site-status">Issues have been detected with this site. It does not seem safe.</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
    </div>
  </div>
</div>
</div>
`;

let ssmParent

function closeModal() {
  ssmParent.style.display = "none";
}

function openModal() {
  ssmParent.style.display = "block";
}

function openDetected() {
  ssmParent.innerHTML = detectedHTML;
  ssmParent.style.display = "block";

  const leaveBtnEl = document.getElementById("ssm-leave-button");
  leaveBtnEl?.addEventListener("click", closeWindow);
}

function openDetails() {
  ssmParent.innerHTML = detailsHTML;

  const checkerBtnEl = document.getElementById("ssm-checker-button");
  checkerBtnEl?.addEventListener("click", closeModal);
  checkerBtnEl?.addEventListener("click", startChecker);

  const graphElements = document.getElementsByClassName("ssm-detail-graph")
  for (const el of graphElements) {
    const random = Math.floor(Math.random() * 20 + 30)
    if (random < 20) {
      el.style.backgroundColor = "#B7F0B1"
    } else if (random < 40) {
      el.style.backgroundColor = "#6FA4FF"
    } else {
      el.style.backgroundColor = "#FF6F6F"
    }
    el.style.width = `${random}%`
  }
}

function closeWindow() {
  browser.runtime.sendMessage({ action: 'closeTab' });
}

browser.runtime.onMessage.addListener(function(message) {
  // Handle the received message
  if (message.action === 'flashDetected') {
    openDetected();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const host = document.location.host

  // Create a new popup element
  ssmParent = document.createElement("div");
  ssmParent.id = "ssm-parent";

  if (host === "www.google.com") {
    ssmParent.innerHTML = modal1HTML;
  } else if (host === "duckduckgo.com") {
    ssmParent.innerHTML = modal2HTML;
  } else if (host === "www.youtube.com") {
    ssmParent.innerHTML = modal2HTML;
  } else {
    return;
  }

  ssmParent.querySelector("#ssm-site-title").innerText = host;
  document.body.appendChild(ssmParent);

  // Add event listener to the buttons
  const leaveBtnEl = document.getElementById("ssm-leave-button");
  leaveBtnEl?.addEventListener("click", closeWindow);

  const detailsBtnEl = document.getElementById("ssm-details-button");
  detailsBtnEl?.addEventListener("click", openDetails);

  const checkerBtnEl = document.getElementById("ssm-checker-button");
  checkerBtnEl?.addEventListener("click", startChecker);
});

async function startChecker() {
  closeModal();
  browser.runtime.sendMessage({ action: 'startChecker' });
}

