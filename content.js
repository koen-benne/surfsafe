const modalHTML = `
<div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
`;

function closeModal() {
  document.getElementById("surfsafe-modal").style.display ="none";
}

window.addEventListener("DOMContentLoaded", function () {

  // Create a new popup element
  const popup = document.createElement("div");
  popup.id = "surfsafe-modal";
  popup.innerHTML = modalHTML;
  document.body.appendChild(popup);
});

