const modalHTML = `
<div class="ssm-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="ssm-modal-dialog">
  <div class="ssm-modal-content">
    <div class="ssm-modal-header">
      <h5 class="ssm-modal-title" >Modal title</h5>
    </div>
    <div class="ssm-modal-body">
      ...
    </div>
    <div class="ssm-modal-footer">
      <button type="button" class="ssm-btn ssm-btn-secondary" data-bs-dismiss="modal" onclick="document.getElementById('ssm-parent').style.display ='none';
">Close</button>
      <button type="button" class="ssm-btn ssm-btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
`;

function closeModal() {
  document.getElementById("ssm-parent").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {

  // Create a new popup element
  const popup = document.createElement("div");
  popup.id = "ssm-parent";
  popup.innerHTML = modalHTML;
  document.body.appendChild(popup);
});

