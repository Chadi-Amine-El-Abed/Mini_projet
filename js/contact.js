const formContact = document.getElementById("fContact");
const messageOk = document.getElementById("contact-ok");
formContact.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!formContact.checkValidity()) {
    formContact.classList.add("was-validated");
    messageOk.classList.add("d-none");
    return;
  }
  formContact.reset();
  formContact.classList.remove("was-validated");
  messageOk.classList.remove("d-none");
});
formContact.addEventListener("input", function () {
  messageOk.classList.add("d-none");
});
