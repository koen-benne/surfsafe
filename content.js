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
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
      </div>
      <p class="ssm-site-status">This site does not seem safe enough. It is advised not to enter</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
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
      <div class="ssm-stars">
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
        <svg class="ssm-star" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <path fill="#6FA4FF" d="M12 1.25l2.589 7.965h8.387l-6.797 4.949 2.589 7.965-6.797-4.949-6.797 4.949 2.589-7.965-6.797-4.949h8.387z"/>
        </svg>
      </div>
      <p class="ssm-site-status">This site does not seem safe enough. It is advised not to enter</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
      <button type="button" id="ssm-details-button" class="ssm-btn ssm-btn-secondary">Details</button>
    </div>
  </div>
</div>
</div>
`;

const modal3HTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content">
    <div class="ssm-modal-header">
      <h1 class="ssm-modal-title" >SurfSafe</h1>
    </div>
    <div class="ssm-modal-body">
      <h2 class="ssm-site-title" id="ssm-site-title"></h2>
      <p class="ssm-site-status">This site is not known to our database. Entering could be unsafe. If you decide to enter, please report the site if it does not seem safe to you.</p>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
      <button type="button" id="ssm-details-button" class="ssm-btn ssm-btn-secondary">Details</button>
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
          <p class="ssm-detail-cat">Hight luminance</p>
          <div class="ssm-detail-graph"></div>
        </div>
      </div>
    </div>
    <div class="ssm-modal-footer">
      <button type="button" id="ssm-leave-button" class="ssm-btn ssm-btn-primary">Leave page</button>
      <button type="button" id="ssm-close-button" class="ssm-btn ssm-btn-secondary">Enter page</button>
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

function openDetails() {
  ssmParent.innerHTML = detailsHTML;

  // Add new event listeners
  const closeBtnEl = document.getElementById("ssm-close-button");
  closeBtnEl?.addEventListener("click", closeModal);
}

function closeWindow() {
  window.close();
  browser.runtime.sendMessage({ action: 'closeTab' });
}

window.addEventListener("DOMContentLoaded", function () {
  const host = document.location.host

  // Create a new popup element
  ssmParent = document.createElement("div");
  ssmParent.id = "ssm-parent";

  if (host === "www.google.com") {
    ssmParent.innerHTML = modal1HTML;
  } else if (host === "duckduckgo.com") {
    ssmParent.innerHTML = modal2HTML;
  } else if (host === "www.qwant.com") {
    ssmParent.innerHTML = modal3HTML;
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
});

